<template><div><h2 id="六-并发处理" tabindex="-1"><a class="header-anchor" href="#六-并发处理"><span>(六) 并发处理</span></a></h2>
<ol>
<li>【强制】获取单例对象需要保证线程安全，其中的方法也要保证线程安全。
<br><span style="color:orange">说明</span>：资源驱动类、工具类、单例工厂类都需要注意。</li>
<li>【强制】创建线程或线程池时请指定有意义的线程名称，方便出错时回溯。
<br><span style="color:green">正例</span>：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>    public class TimerTaskThread extends Thread {      
        public TimerTaskThread() {      
              super.setName("TimerTaskThread");   
              ... 
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>【强制】线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。
<br><span style="color:orange">说明</span>：使用线程池的好处是减少在创建和销毁线程上所花的时间以及系统资源的开销，解决资源不足的问题。如果不使用线程池，有可能造成系统创建大量同类线程而导致消耗完内存或者“过度切换”的问题。</li>
<li>【强制】线程池不允许使用Executors去创建，而是通过ThreadPoolExecutor的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险。
<br><span style="color:orange">说明</span>：Executors返回的线程池对象的弊端如下：
1）<code v-pre>FixedThreadPool</code>和<code v-pre>SingleThreadPool</code>:   允许的请求队列长度为Integer.MAX_VALUE，可能会堆积大量的请求，从而导致OOM。
2）<code v-pre>CachedThreadPool</code>和<code v-pre>ScheduledThreadPool</code>:   允许的创建线程数量为Integer.MAX_VALUE，可能会创建大量的线程，从而导致OOM。</li>
<li>【强制】SimpleDateFormat 是线程不安全的类，一般不要定义为static变量，如果定义为static，必须加锁，或者使用DateUtils工具类。
<br><span style="color:green">正例</span>：注意线程安全，使用<code v-pre>DateUtils</code>。亦推荐如下处理：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>private static final ThreadLocal&lt;DateFormat> df = new ThreadLocal&lt;DateFormat>() {        
    Override        
    protected DateFormat initialValue() {         
        return new SimpleDateFormat("yyyy-MM-dd");        
    }    
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><span style="color:orange">说明</span>：如果是JDK8的应用，可以使用<code v-pre>Instant</code>代替<code v-pre>Date</code>，<code v-pre>LocalDateTime</code>代替<code v-pre>Calendar</code>，<code v-pre>DateTimeFormatter</code>代替<code v-pre>SimpleDateFormat</code>，官方给出的解释：</p>
<blockquote>
<p>simple beautiful strong immutable thread-safe。</p>
</blockquote>
<ol start="6">
<li>【强制】高并发时，同步调用应该去考量锁的性能损耗。能用无锁数据结构，就不要用锁；能锁区块，就不要锁整个方法体；能用对象锁，就不要用类锁。 <br><span style="color:orange">说明</span>：尽可能使加锁的代码块工作量尽可能的小，避免在锁代码块中调用RPC方法。</li>
<li>【强制】对多个资源、数据库表、对象同时加锁时，需要保持一致的加锁顺序，否则可能会造成死锁。 <br><span style="color:orange">说明</span>：线程一需要对表A、B、C依次全部加锁后才可以进行更新操作，那么线程二的加锁顺序也必须是A、B、C，否则可能出现死锁。</li>
<li>【强制】并发修改同一记录时，避免更新丢失，需要加锁。要么在应用层加锁，要么在缓存加锁，要么在数据库层使用乐观锁，使用version作为更新依据。 <br><span style="color:orange">说明</span>：如果每次访问冲突概率小于20%，推荐使用乐观锁，否则使用悲观锁。乐观锁的重试次数不得小于3次。</li>
<li>【强制】多线程并行处理定时任务时，Timer运行多个TimeTask时，只要其中之一没有捕获抛出的异常，其它任务便会自动终止运行，使用<code v-pre>ScheduledExecutorService</code>则没有这个问题。</li>
<li>【推荐】使用<code v-pre>CountDownLatch</code>进行异步转同步操作，每个线程退出前必须调用countDown方法，线程执行代码注意catch异常，确保countDown方法被执行到，避免主线程无法执行至await方法，直到超时才返回结果。 <br><span style="color:orange">说明</span>：注意，子线程抛出异常堆栈，不能在主线程try-catch到。</li>
<li>【推荐】避免Random实例被多线程使用，虽然共享该实例是线程安全的，但会因竞争同一seed 导致的性能下降。
<br><span style="color:orange">说明</span>：Random实例包括java.util.Random 的实例或者 Math.random()的方式。
<br><span style="color:green">正例</span>：在JDK7之后，可以直接使用API ThreadLocalRandom，而在 JDK7之前，需要编码保证每个线程持有一个实例。</li>
<li>【推荐】在并发场景下，通过双重检查锁（double-checked locking）实现延迟初始化的优化问题隐患(可参考 The &quot;Double-Checked Locking is Broken&quot; Declaration)，推荐解决方案中较为简单一种（适用于JDK5及以上版本），将目标属性声明为 volatile型。
<br><span style="color:red">反例</span>：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>  class Singleton {   
        private Helper helper = null;  
        public Helper getHelper() {  
          if (helper == null) 
          synchronized(this) {      
            if (helper == null)        
            helper = new Helper();    
          }      
          return helper;  
        }  
        // other methods and fields...  
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13">
<li>【参考】volatile解决多线程内存不可见问题。对于一写多读，是可以解决变量同步问题，但是如果多写，同样无法解决线程安全问题。如果是count++操作，使用如下类实现：</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>AtomicInteger count = new AtomicInteger(); 
count.addAndGet(1); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果是JDK8，推荐使用<code v-pre>LongAdder</code>对象，比<code v-pre>AtomicLong</code>性能更好（减少乐观锁的重试次数）。
14. 【参考】 HashMap在容量不够进行resize时由于高并发可能出现死链，导致CPU飙升，在开发过程中可以使用其它数据结构或加锁来规避此风险。
15. 【参考】<code v-pre>ThreadLocal</code>无法解决共享对象的更新问题，<code v-pre>ThreadLocal</code>对象建议使用static修饰。这个变量是针对一个线程内所有操作共享的，所以设置为静态变量，所有此类实例共享此静态变量 ，也就是说在类第一次被使用时装载，只分配一块存储空间，所有此类的对象(只要是这个线程内定义的)都可以操控这个变量。</p>
</div></template>


