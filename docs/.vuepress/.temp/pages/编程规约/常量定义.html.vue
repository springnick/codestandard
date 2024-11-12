<template><div><h2 id="_1-2-常量定义" tabindex="-1"><a class="header-anchor" href="#_1-2-常量定义"><span>1.2 常量定义</span></a></h2>
<ol>
<li>【强制】代码中不允许出现不知含义的数值， 必须定义成常量。 如果是字符串， 出现一次以上， 也应该定义成常量。
<br><span style="color:red">反例</span>：</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code><span class="token class-name">String</span> sql<span class="token operator">=</span><span class="token string">"select policyId from Policy where status=3"</span> <span class="token comment">//错误： 这里3 应该说明含义</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token string">"prod1"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>productCode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   
<span class="token punctuation">}</span>

<span class="token keyword">int</span> stage<span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">//错误： 这里应该是定义把5, 6 定义成常量</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>stage<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>【强制】long或者Long初始赋值时，使用大写的L，不能是小写的l，小写容易跟数字1混淆，造成误解。
<br><span style="color:orange">说明</span>：<pre>Long a = 2l;</pre> 写的是数字的<code v-pre>21</code>，还是Long型的<code v-pre>2</code>?</li>
<li>【推荐】不要使用一个常量类维护所有常量，按常量功能进行归类，分开维护。
<br><span style="color:orange">说明</span>：大而全的常量类，非得使用查找功能才能定位到修改的常量，不利于理解和维护。
<br><span style="color:green">正例</span>：缓存相关常量放在类CacheConsts下；系统配置相关常量放在类ConfigConsts下。</li>
<li>【推荐】常量的复用层次有五层：跨应用共享常量、应用内共享常量、子工程内共享常量、包内共享常量、类内共享常量。<br>
1） 跨应用共享常量：放置在二方库中，通常是client.jar中的constant目录下。
2） 应用内共享常量：放置在一方库中，通常是子模块中的constant目录下。
<br><span style="color:red">反例</span>：易懂变量也要统一定义成应用内共享常量，两位攻城师在两个类中分别定义了表示“是”的变量：</li>
</ol>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>    类<span class="token class-name">A</span>中：<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">YES</span> <span class="token operator">=</span> <span class="token string">"yes"</span><span class="token punctuation">;</span>
    类<span class="token class-name">B</span>中：<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">YES</span> <span class="token operator">=</span> <span class="token string">"y"</span><span class="token punctuation">;</span>
    <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token constant">YES</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">B</span><span class="token punctuation">.</span><span class="token constant">YES</span><span class="token punctuation">)</span> 预期是<span class="token boolean">true</span>，但实际返回为<span class="token boolean">false</span>，导致线上问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3） 子工程内部共享常量：即在当前子工程的constant目录下。<br>
4） 包内共享常量：即在当前包下单独的constant目录下。<br>
5） 类内共享常量：直接在类内部private static final定义。
5. 【推荐】如果变量值仅在一个固定范围内变化用enum类型来定义。 说明：如果存在名称之外的延伸属性使用enum类型，下面正例中的数字就是延伸信息，表示一年中的第几个季节。
<br><span style="color:green">正例</span>：</p>
<div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre v-pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">SeasonEnum</span> <span class="token punctuation">{</span>   
          <span class="token function">SPRING</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">SUMMER</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">AUTUMN</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">WINTER</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">int</span> seq<span class="token punctuation">;</span> 
          <span class="token class-name">SeasonEnum</span><span class="token punctuation">(</span><span class="token keyword">int</span> seq<span class="token punctuation">)</span><span class="token punctuation">{</span>         
              <span class="token keyword">this</span><span class="token punctuation">.</span>seq <span class="token operator">=</span> seq<span class="token punctuation">;</span>     
          <span class="token punctuation">}</span> 
  <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


