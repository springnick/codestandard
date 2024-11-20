---
home: false
title: Thaicloud 代码规范 - Java
#heroImage: https://vuejs.press/images/hero.png

footer:  Copyright © 2024- SEA ThaiCloud
---

## 基本规范

### 命名规范
命名应该遵循统一，达意， 简洁的原则， 用英文命名。
统一 指同一个概念或事物，应该在整个系统（不同项目）中用统一的名称来命名， 如果一个事物可以用多个名称表示， 那么应该选取一个统一的名称。 
达意 指名称应该准确地表达其代表的意义， 比如用 Insured, PolicyQueryService,  而不应该用 Person1,  Service2 
简洁 指在统一，达意的基础上使用尽量短的名称， 比如应该用 PolicyLifeCycleService ，不应该用 PolLfCycSvc
我们规定都用英文命名 ， 不应该使用汉语拼音命名。
类名，字段名， 方法名， 变量名 都应该使用驼峰规则来命名， 单词之间通过首字母大写来分割。

#### 项目名
项目名称全部使用小写， 只包含字母与 -， 项目名称应该简洁易懂， 同一类的项目名称应该使用相同的前缀
<span style="color:green">正例</span>：
pa, web, web-dtn,  dbscript-th, dbscript-tmsth


#### 包名
包名统一使用小写字母与点分割符， 包名应该尽量简短， 无歧义。
包名统一使用单数形式, 包名都应该以com.ebao.gs 为前缀，
同一个项目包名应该使用统一的前缀。

<span style="color:green">正例</span>：
com.ebao.gs.sp.pa

包名规则, xx.xx 代表当前项目统一的包前缀，如com.ebao.gs.sp

| 层级/用途                       |    前后缀规则                |
|--------------------------- | ------------------    |
| spring config 包           | xx.xx.config          |
| 平台Security 相关包         | xx.xx.security        |
| 业务模型包                  | xx.xx.model           |
| API/Controller 包           | xx.xx.api            |
| 业务服务接口包               | xx.xx.service.interf |
| 业务服务实现类包             | xx.xx.service.impl   |
| 工具类包                    | xx.xx.util           |
| Groovy 脚本类包             | xx.xx.dsl            |
| DB 仓库类包                 | xx.xx.repository     |
| ES 类包                     | xx.xx.es             |
| Dao 类包                    | xx.xx.dao            |
| API传递数据到前端 包         | xx.xx.vo             |
| API 与Service 之间传递数据包 | xx.xx.dto            |

#### 类名文件名接口名
* 类名应该只包含字母， 应该使用首字母大写驼峰规则来分割不同单词， 类名通常用名词或名词短语形式， 接口名应该用名词或名词+形容词，  比如 SearchFilter, OicConverter,  Runnable
* 接口对应的实现类一般用接口名+Impl，  或者Default/Base/Abstract+接口名

* 命名前后缀规则

| 用途                       |    包名                |
| -------------------------- | --------------------- |
| API 类                    | 加API 后缀，如：BlackListAPI |
| Converter 类              | 加Converter 后缀，如DocumentsConverter |
| ES 模型类                  | 以Es 前缀开头， 如EsPolIdx |
| ES repo 类                | 加EsRepo后缀， 如AddressEsRepo |
| ES service 接口           | 加Es前缀，EsConverterService |
| Even 类                   | 加Event 后缀 |
| MyBatis repo 类           | 加Repository 后缀 |
| 业务模型类                 | 加Model 后缀， 如PolicyModel |
| 业务 service 类            | 加Service 后缀 |
| 业务 service 实现类        | 加ServiceImpl后缀 |
| 异常类                    | 加Exception 后缀  |

#### 静态常量名

* 常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，
* 某一类静态常量尽量用相同的前缀加以归类，
* <span style="color:green">正例</span>：
![正例](/images/java/name_const1.png)
* <span style="color:red">反例</span>
![反例](/images/java/name_const2.png)

* 另外静态常量可以根据需要用静态类加以归类， 这样引用时会方便很多
* <span style="color:green">正例</span>：<br>
![正例](/images/java/name_const3.png)

::: tip

* 日志输出静态字段 在Java 中 统一命名为 log,  groovy 中使用@Slf4j

:::

#### 成员变量名
* 字段名使用小驼峰规则， 首字母小写， 后面每个单词的首字母大写， 如policyHolder。字段名一般应该用名词，或名词+形容词 表示。 字段名应该只包含字母。
* 字段名不能以is 开头， 
* <span style="color:green">正例</span>：<br>
printed
* <span style="color:red">反例</span>: <br>
isPrinted

#### 方法名
* 方法名使用小驼峰规则，首字母小写，后面每个单词的首字母大写， 如issuePolicy(). 方法名应该 使用动词加名词来表示， 一般表示做什么事情。方法名应该只包含字母。
* 方法名的动词应该遵循下面约定俗成的规则

| 方法动词前缀               	| 说明                                                                       |
| ---------------------------- | --------------------------------------------------------------------------- |
| get/set +属性名（大驼峰规则）  | 	标准的类gettter, setter |
| findXXX                      |	Service/Dao/Repo   |  中查找数据， 可能返回空 |
| loadXXX                      |	Service/Dao/Repository 中从数据库加载单条数据， 不能返回空，如果为空应该抛异常 |
| queryXXX                     |	根据指定条件查询多条数据，可能为空 |
| saveXXX                      |	Service 中保存数据 |
| createXXX                    |	Service 中创建数据 |
| insertXXX                    |	Dao/Repository 中， 往数据库中插入数据
| updateXXX                    |	Service/Dao/Repository 中， 更新数据库数据 |
| deleteXXX                    |	Service/Dao/Repository 中，删除数据库数据 |

#### 局部变量名
* 局部变量名应该使用小驼峰规则。 
* 局部变量命名尽量避免与类成员变量重名

#### 配置文件名

##### Spring 配置文件
* Spring 配置文件名应该加spring- 前缀， 如spring-services.xml 
* bean id 命名应该使用 对应类名的小驼峰规则命名, 如 mailSenderFactory

##### MyBatis 配置文件
* MyBatis Mapper 配置文件必须加Mapper 后缀， 如AgrmtMapper.xml

##### Properties 文件
* Properties 文件主要用于存放系统的各个配置的key, value
* Properties 文件名应该全部小写， 可以包含字母，数字，-，_
* Properties 文件中 key 应该全部小写，用点（.）分割， 同一类/用途的key 应该放在一起，并用相同的前缀类组织。 
* <span style="color:green">正例</span>：<br>
![正例](/images/java/prop1.png)
* <span style="color:red">反例</span>: <br>
::: tip
下面key 应该用generator.template 作为前缀, related.root 应该用在表示一个目录，但下面是具体的文件名，所以不应该用related.root
:::
![反例](/images/java/prop2.png)

#### 测试类命名
* 测试类命名遵循一般类名命名规则， 大驼峰规则， 并以Test 为后缀， 如 PolicyLifeCycleServiceTest
* 测试方法名遵循一般方法名命名规则，并以test为前缀  如testSavePolicy

#### API 相关
* API 设计时尽量遵循Restful 风格， url 命名 应该使用名词而不是动词， 因为url 代码资源， 尽量用http method 表达对资源的动作， 
* <span style="color:green">正例</span>：<br>
``` java
//load 保单信息
GET /b2b/policy/{policyId}
//创建保单
POST /b2b/policy
//全量更新保单
POST /b2b/policy/{policyId}
//增量更新保单信息
PUT /b2b/policy/{policyId}
//删除保单
DELETE /b2b/policy/{policyId}
//查询保单列表,  
POST /b2b/polices
```

* <span style="color:red">反例</span>: <br>
``` java
//find 动词能避免就避免
GET  /b2b/find/policy  
//应该用http 方法表达对保单的不同操作
POST /b2b/create/policy
POST /b2b/update/policy
```

### 代码格式

1. 源代码统一使用utf-8 编码格式，结尾用unix 方式换行
2. 每行代码不应该超过80 个字符
3. 包导入时不应该使用*， 
4. 成员变量声明时， 每行只声明一个成员变量
5. 类结构顺序应该为：
``` java
//包导入
import aa.bb.cc;
//类名
class Class1{
//<静态常量块>
    public static final String CONST1="VAL1";
//<成员变量块>
    private String name;
//<构造方法块>
    public Class1(){
        ...
    }
//<静态方法块>
    public static smethod1(){

    }
//<私有方法块>
    private void privateMethod1(){

    }
//<getter/setter 块>
    public String getName(){
        return name;
    }
//<Protected 方法块>
    protected void validateName(){
        ...
    }
//<公共方法块>
    public String handleName(){
        ...
    }
}
```
6. 类具体的格式遵循IDEA 默认格式， 修改完代码后使用IDEA 默认格式化工具对代码进行格式化。

### 注释
* 所有注释应该遵循JDK的Javadoc 规范

#### 类的注释
* 用 /** */ 来加类注释
* 重要或复杂的类，必须要有注释， 
* 类注释应该包括： 
1. 类的作用、描述、甚至使用场景   
2. @author ,  用来表名类的作者， 后面的修改者 应该 把修改者名称 附加到author 列表中， 
3. @date  用来标明类创建时间

![正例](/images/java/comment1.png)

#### 字段的注释
* 用/*  */ 来加字段注释, 注释内存应该描述 当前字段的用途， 注意事项
![正例](/images/java/comment2.png)

#### 方法注释
* 用/** */ 来添加公共方法注释，  注释第一句总结一下当前方法的用途， 然后描述方法做了什么事情， 用来什么算法， 或其他一些业务逻辑。 对于一些特殊的地方， 要说一下为什么这么做。 如果这个方法有其他配合调用的地方， 可以用@see 来标明哪个类的那个方法
![正例](/images/java/comment3.png)

#### 方法内行注释

![正例](/images/java/comment4.png)

## 通用规则

### 控制语句
#### if/else
* 在if/else/for/while/do语句中必须使用大括号。
::: tip
说明：即使只有一行代码，也禁止不采用大括号的编码方式，
:::

* <span style="color:red">反例</span>: <br>
``` java
 if (condition) statements;
```

#### 三目运算
* 三目运算符condition? 表达式1 : 表达式2中，高度注意表达式1和2在类型对齐时，可能抛出因自动拆箱导致的NPE异常。
::: tip
说明：以下两种场景会触发类型对齐的拆箱操作： 
1. 表达式1或表达式2的值只要有一个是原始类型。 
2. 表达式1或表达式2的值的类型不一致，会强制拆箱升级成表示范围更大的那个类型。
:::
* <span style="color:red">反例</span>: <br>
``` java
Integer a = 1;
Integer b = 2;
Integer c = null;
Boolean flag = false;
// a*b的结果是int类型，那么c会强制拆箱成int类型，抛出NPE异常
Integer result=(flag? a*b : c);
```

#### 高并发
* 在高并发场景中，避免使用”等于”判断作为中断或退出的条件
::: tip
说明：如果并发控制没有处理好，容易产生等值判断被“击穿”的情况，使用大于或小于的区间判断条件来代替。
:::

* <span style="color:red">反例</span>: <br>
判断剩余奖品数量等于0时，终止发放奖品，但因为并发处理错误导致奖品数量瞬间变成了负数，这样的话，活动无法终止。

#### 赋值语句
*不要在表达式里，放赋值语句
::: tip
说明：赋值语句应该单独放一行,  
:::

* <span style="color:red">反例</span>: <br>
``` java
  Boolean isEmpty=(count=service.countByName()) > 0
```
#### 避免采用取反逻辑运算符
::: tip
说明：取反逻辑不利于快速理解，并且取反逻辑写法一般都存在对应的正向逻辑写法。 
:::

* <span style="color:green">正例</span>: <br>
使用if (x < 628) 来表达 x 小于628。 

* <span style="color:red">反例</span>: <br>
使用if (!(x >= 628)) 来表达 x 小于628。

#### 入参保护
* 公开接口需要进行入参保护，尤其是批量操作的接口。
* <span style="color:red">反例</span>: <br> 
某业务系统，提供一个用户批量查询的接口，API文档上有说最多查多少个，但接口实现上没做任何保护，导致调用方传了一个1000的用户id数组过来后，查询信息后，内存爆了。

#### 循环try-catch
* 循环体中的语句要考量性能，以下操作尽量移至循环体外处理，如定义对象、变量、获取数据库连接，进行不必要的try-catch操作（这个try-catch是否可以移至循环体外）

#### 不要判断表达式里多方法调用
* 不要在if 判断表达式里放包含多个方法的调用 尤其是表达式里有逻辑判断，使用一个有意义的布尔变量来暂存方法调用结果， 然后在if 判断表达式 判断布尔变量。
* <span style="color:red">反例</span>: <br> 
``` java
if((user.isSales() && user.isEA()) && ((policy.status=5|| policy.status=9)&& task.approved==1)){
    //…
}
```
* <span style="color:green">正例</span>: <br>
``` java
boolean canSell= user.isSales() && user.isEA();
boolean policyCanBeIssued=false;
if(policy.status=5|| policy.status=9)&& task.approved==1){
  policyCanBeIssued=true;
}
if(canSell && policyCanBeIssued){
   //…
}
```

### 常量定义
#### 魔法值
* 不允许任何魔法值（即未经预先定义的常量）直接出现在代码中。 
* <span style="color:red">反例</span>: <br> 
``` java
 // 本例中，开发者 A 定义了缓存的 key，然后开发者 B 使用缓存时少了下划线，即 key 是"Id#eao"+tradeId，导致 出现故障 
 String key = "Id#eao_" + tradeId; 
cache.put(key, value);
```
#### long 赋值
* 在 long 或者 Long 赋值时，数值后使用大写字母 L，不能是小写字母 l，小写容易跟 数字混淆，造成误解。
::: tip
说明：Long a = 2l; 写的是数字的 21，还是 Long 型的 2？
:::

### 日期时间

#### 日期格式化
* 日期格式化时，传入 pattern 中表示年份统一使用小写的y
::: tip
说明：日期格式化时，yyyy 表示当天所在的年，而大写的 YYYY 代表是 week in which year（JDK7 之后 引入的概念），意思是当天所在的周属于的年份，一周从周日开始，周六结束，只要本周跨年，返回的 YYYY 就是下一年。 
:::
* <span style="color:green">正例</span>: <br>
``` java 
//表示日期和时间的格式如下所示： 
new SimpleDateFormat("yyyy-MM-dd HH:mm:ss")
```

#### Date/Time/Timestamp 使用
* 不允许在程序任何地方中使用：1）java.sql.Date。 2）java.sql.Time。3）java.sql.Timestamp。
::: tip
说明：
* 第 1 个不记录时间，getHours()抛出异常；
* 第 2 个不记录日期，getYear()抛出异常；
* 第 3 个在构造 方法 super((time/1000)*1000)，在 Timestamp 属性 fastTime 和 nanos 分别存储秒和纳秒信息。 
:::

* <span style="color:red">反例</span>: <br> 
 java.util.Date.after(Date)进行时间比较时，当入参是 java.sql.Timestamp 时，会触发 JDK BUG(JDK9 已修复)，可能导致比较时的意外结果。

#### 一年天数
* 不要在程序中写死一年为 365 天，避免在公历闰年时出现日期转换错误或程序逻辑错误。
* <span style="color:green">正例</span>: <br>
``` java 
// 获取今年的天数 
int daysOfThisYear = LocalDate.now().lengthOfYear(); 
// 获取指定某年的天数 
LocalDate.of(2011, 1, 1).lengthOfYear(); 
```

* <span style="color:red">反例</span>: <br> 
 ``` java
// 第一种情况：在闰年 366 天时，出现数组越界异常 
int[] dayArray = new int[365]; 
// 第二种情况：一年有效期的会员制，今年 1 月 26 日注册，硬编码 365 返回的却是 1 月 25 日 
Calendar calendar= Calendar.getInstance(); 
calendar.set(2020, 1, 26); 
calendar.add(Calendar.DATE, 365)
```

### 集合相关
#### hashCode 和 equals 的处理
关于 hashCode 和 equals 的处理，遵循如下规则：
* 只要覆写 equals，就必须覆写 hashCode。 
* 因为 Set 存储的是不重复的对象，依据 hashCode 和 equals 进行判断，所以 Set 存储的对象必须覆写 这两种方法。 
* 如果自定义对象作为 Map 的键，那么必须覆写 hashCode 和 equals。 
::: tip
说明：String 因为覆写了 hashCode 和 equals 方法，所以可以愉快地将 String 对象作为 key 来使用。
:::

#### 集合空检查
* 判断所有集合内部的元素是否为空，使用 isEmpty()方法，而不是 size()==0 的方式
::: tip
说明：在某些集合中，前者的时间复杂度为 O(1)，而且可读性更好。 
:::
* <span style="color:green">正例</span>: <br>
``` java
 Map map= new HashMap<>(16); 
       if(map.isEmpty()) { 
        System.out.println("no element in this map."); 
       }

```

####  java.util.stream.Collectors.toMap
* 在使用 java.util.stream.Collectors 类的 toMap()方法转为 Map 集合时，一定要使 用含有参数类型为 BinaryOperator，参数名为 mergeFunction 的方法，否则当出现相同 key 值时会抛出 IllegalStateException 异常
::: tip
说明：参数 mergeFunction 的作用是当出现 key 重复时，自定义对 value 的处理策略。 
:::
* <span style="color:green">正例</span>: <br>
``` java 
List<Pair> pairArrayList = new ArrayList<>(3); 
pairArrayList.add(new Pair<>("version", 12.10));
pairArrayList.add(new Pair<>("version", 12.19));
pairArrayList.add(new Pair<>("version", 6.28)); 
Map map= pairArrayList.stream().collect( 
// 生成的 map 集合中只有一个键值对：{version=6.28} 
Collectors.toMap(Pair::getKey, Pair::getValue, (v1, v2) -> v2)); 
```

* <span style="color:red">反例</span>: <br>
``` java  
String[] departments = new String[] {"iERP", "iERP", "EIBU"}; 
// 抛出 IllegalStateException 异常 
Map map = Arrays.stream(departments)
    .collect(Collectors.toMap(String::hashCode, str -> str));
```

#### ArrayList的subList
* ArrayList的subList结果不可强转成ArrayList，否则会抛出 ClassCastException异常：java.util.RandomAccessSubList cannot be cast to java.util.ArrayList
::: tip
说明：subList()返回的是ArrayList的内部类SubList，并不是 ArrayList本身，而是ArrayList 的一个视图，对于SubList的所有操作最终会反映到原列表上。
:::

#### Map.keySet()/values()/entrySet()
* 使用Map的方法keySet()/values()/entrySet()返回集合对象时，不可以对其进行添加元素操作，否则会抛出UnsupportedOperationException异常。

#### Collections 返回结果
* Collections类返回的对象，如：emptyList()/singletonList()等都是immutable list，不可对其进行添加或者删除元素的操作
* <span style="color:red">反例</span>: <br>
如果查询无结果，返回Collections.emptyList()空集合对象，调用方一旦进行了添加元素的操作，就会触发UnsupportedOperationException异常。

#### List 的 subList 方法
* 在subList场景中，高度注意对父集合元素的增加或删除，均会导致子列表的遍历、增加、删除产生ConcurrentModificationException 异常。
#### 集合转数组
* 使用集合转数组的方法，必须使用集合的toArray(T[] array)，传入的是类型完全一致、长度为0的空数组。 
* <span style="color:red">反例</span>: <br>
* 直接使用toArray无参方法存在问题，此方法返回值只能是Object[]类，若强转其它类型数组将出现ClassCastException错误。
* <span style="color:green">正例</span>: <br>
``` java
List<String> list = new ArrayList<>(2);
list.add("policy");
list.add("claim");
```
#### Collection.addAll
* 在使用Collection接口任何实现类的addAll()方法时，都要对输入的集合参数进行NPE判断。
::: tip
说明：在ArrayList#addAll方法的第一行代码即Object[] a = c.toArray(); 其中c为输入集合参数，如果为null，则直接抛出异常。
:::
#### 泛型通配符 <? extends T>
泛型通配符<? extends T>来接收返回的数据，此写法的泛型集合不能使用add方法，而<? super T>不能使用get方法，两者在接口调用赋值的场景中容易出错。
::: tip
说明：扩展说一下PECS(Producer Extends Consumer Super)原则：
* 第一、频繁往外读取内容的，适合用<? extends T>。
* 第二、经常往里插入的，适合用<? super T>
:::

### 并发处理
#### 单例
* 获取单例对象需要保证线程安全，其中的方法也要保证线程安全。
::: tip
说明：资源驱动类、工具类、单例工厂类都需要注意。
:::
#### 线程池定义
创建线程或线程池时请指定有意义的线程名称，方便出错时调查问题。
自定义线程工厂，并且根据外部特征进行分组，比如，来自同一机房的调用，把机房编号赋值给whatFeatureOfGroup 
* <span style="color:green">正例</span>: <br>
![正例](/images/java/thread1.png)

#### 线程创建
* 线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。
::: tip
说明：线程池的好处是减少在创建和销毁线程上所消耗的时间以及系统资源的开销，解决资源不足的问题。如果不使用线程池，有可能造成系统创建大量同类线程而导致消耗完内存或者“过度切换”的问题。
:::

#### 不要用 Executors
* 线程池不允许使用Executors去创建，而是通过ThreadPoolExecutor的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险。
::: tip
说明：Executors返回的线程池对象的弊端如下： 
1. FixedThreadPool和SingleThreadPool： 允许的请求队列长度为Integer.MAX_VALUE，可能会堆积大量的请求，从而导致OOM。 
2. CachedThreadPool： 允许的创建线程数量为Integer.MAX_VALUE，可能会创建大量的线程，从而导致OOM。
:::
#### 优先使用 DateTimeFormatter
* 优先使用 DateTimeFormatter,  避免使用SimpleDateFormat, 如果必须使用， SimpleDateFormat 避免定义为static, 如果必须是static, 则必须加锁。 
::: tip
JDK 8 中， 推荐用Instant 代替Date, LocalDateTime 代替Calendar. DateTimeFormatter 代替SimpleDateFormat.  官方给出的解释：simple beautiful strong immutable thread-safe。
:::
#### ThreadLocal 变量回收
* 必须回收自定义的ThreadLocal变量，尤其在线程池场景下，线程经常会被复用，如果不清理自定义的 ThreadLocal变量，可能会影响后续业务逻辑和造成内存泄露等问题。尽量在代理中使用try-finally块进行回收。
* <span style="color:green">正例</span>: <br>
``` java
 objectThreadLocal.set(userInfo);
try { 
// ... 
} finally { 
  objectThreadLocal.remove(); 
}
```
#### 高并发时锁的使用
* 高并发时，同步调用应该去考量锁的性能损耗。能用无锁数据结构，就不要用锁；能锁区块，就不要锁整个方法体；能用对象锁，就不要用类锁。
::: tip
说明：尽可能使加锁的代码块工作量尽可能的小，避免在锁代码块中调用RPC方法。 因为RPC 方法可能因为网络原因耗时比较长， 从而影响整体并发。
:::
#### 避免死锁
* 对多个资源、数据库表、对象同时加锁时，需要保持一致的加锁顺序，否则可能会造成死锁。
::: tip
说明：线程一需要对表A、B、C依次全部加锁后才可以进行更新操作，那么线程二的加锁顺序也必须是A、B、C，否则可能出现死锁。
:::
#### 锁的获取与释放 1
* 在使用阻塞等待获取锁的方式中，必须在try代码块之外，并且在加锁方法与try代码块之间没有任何可能抛出异常的方法调用，避免加锁成功后，在finally中无法解锁。
::: tip
* 说明一：如果在lock方法与try代码块之间的方法调用抛出异常，那么无法解锁，造成其它线程无法成功获取锁。 
* 说明二：如果lock方法在try代码块之内，可能由于其它方法抛出异常，导致在finally代码块中，unlock对未加锁的对象解锁，它会调用AQS的tryRelease方法（取决于具体实现类），抛出IllegalMonitorStateException异常。 
* 说明三：在Lock对象的lock方法实现中可能抛出unchecked异常，产生的后果与说明二相同。
:::
* <span style="color:green">正例</span>: <br>
``` java
Lock lock = new XxxLock(); 
// ... 
lock.lock(); 
try { 
  doSomething(); 
  doOthers(); 
} finally { 
  lock.unlock(); 
}
```

* <span style="color:red">反例</span>: <br>
``` java
Lock lock = new XxxLock();
//..
try{
  // 如果此处抛出异常，则直接执行finally代码块 
  doSomething(); 
  // 无论加锁是否成功，finally代码块都会执行 
  lock.lock(); 
  doOthers(); 
} finally { 
  lock.unlock(); 
}
```
#### 锁的获取与释放 2
* 在使用尝试机制来获取锁的方式中，进入业务代码块之前，必须先判断当前线程是否持有锁。锁的释放规则与锁的阻塞等待方式相同。
::: tip
说明：Lock对象的unlock方法在执行时，它会调用AQS的tryRelease方法（取决于具体实现类），如果当前线程不持有锁，则抛出IllegalMonitorStateException异常。 
:::
* <span style="color:green">正例</span>: <br>
``` java
Lock lock = new XxxLock(); 
// ... 
boolean isLocked = lock.tryLock(); 
if (isLocked) { 
  try { 
    doSomething(); 
    doOthers(); 
  } finally { 
    lock.unlock(); 
  } 
}
```
#### 并发加锁
* 并发修改同一记录时，避免更新丢失，需要加锁。要么在应用层加锁，要么在缓存加锁，要么在数据库层使用乐观锁，使用version作为更新依据。
::: tip
说明：如果每次访问冲突概率小于20%，推荐使用乐观锁，否则使用悲观锁。乐观锁的重试次数不得小于3次。
:::
#### 多线程时变量自增
* 多线程情况下 count++ 操作， 推荐使用 LongAdder 对象， 比AtomicLong 性能更好（减少乐观锁的重试次数）


### 日志相关

#### 日志级别判断
* 如果日志输出不是直接的字符串， 则必须加上 日志级别判断
* <span style="color:green">正例</span>: <br>
``` java
   if(log.isDebugEnabled()){
     log.debug(“  policy {} for user {} is issued”,policyNo, userName)
   }
```
#### 日志消息格式化
* 日志输出格式化消息是应该使用sl4j 的消息格式化功能, 而不是自己拼接字符串
* <span style="color:green">正例</span>: <br>
``` java
  log.info(“policy no is {}”, policyNo);
```
#### 禁用System.out or printStackTrace
::: warning
* 生产环境禁止直接使用System.out 或System.err 输出日志或使用e.printStackTrace()打印异常堆栈。 
::: 

### 异常相关
#### RuntimeException异常不应该catch
Java 类库中定义的可以通过预检查方式规避的RuntimeException异常不应该通过catch 的方式来处理，比如：NullPointerException，IndexOutOfBoundsException等等
::: tip
说明：无法通过预检查的异常除外，比如，在解析字符串形式的数字时，可能存在数字格式错误，不得不通过catch NumberFormatException来实现。 
:::
* <span style="color:green">正例</span>: <br>
``` java
if (obj != null) {...} 
```
* <span style="color:red">反例</span>: <br>
``` java
try { obj.method(); }cath(NullPointerException e){…}
```
#### 异常与流程控制
* 异常捕获后不要用来做流程控制，条件控制
::: tip
说明：异常设计的初衷是解决程序运行中的各种意外情况，且异常的处理效率比条件判断方式要低很多
:::

#### 异常捕获
* 捕获异常是为了处理它，不要捕获了却什么都不处理而抛弃之，如果不想处理它，请将该异常抛给它的调用者。最外层的业务使用者，必须处理异常，将其转化为用户可以理解的内容。 _
#### finally 里资源关闭
* finally块必须对资源对象、流对象进行关闭，有异常也要做try-catch。 

#### 不要在finally块中使用return。 
::: tip
说明：try块中的return语句执行成功后，并不马上返回，而是继续执行finally块中的语句，如果此处存在return语句，则在此直接返回，无情丢弃掉try块中的返回点
:::
* <span style="color:red">反例</span>: <br>
``` java
private int x = 0; 
public int checkReturn() { 
try { 
    // x等于1，此处不返回 _
    return ++x; 
} finally { 
    // 返回的结果是2 
    return ++x; 
} 
}
```


### Groovy 相关
#### find() 与 first()
* Groovy 中集合获取第一个元素应该使用find(),  而不是first()
因为first() 如果集合为空时，会报异常
#### 不用def
#### Groovy 中 定义变量要使用具体的类型，而不是使用def 
* 避免不同jdk 版本推断类型有差异， 比如 def a=1,  可以推断为int,  或short,  long 
####  禁用 GroovyShell
* 禁止使用GroovyShell 来执行动态groovy 脚本， 会引起内存泄露
#### 如何避免空指针
* 为了防止空指针异常，groovy可以在有可能为空值的对象后加？进行判断，
比如：
``` groovy
 policy.ext?.payer?.idNo
```

### 性能相关
::: info
* 连续处理批量数据时，加载数据库数据时要确认表中数据可能最大数量， 大量数据的表要分页查， 分批处理。 避免消耗太多内存。
* 避免在循环体内创建对象
* 避免使用Json 把对象转成String 来输出log ,性能有问题
* 避免定义静态的集合变量，可能出现内存泄露
* 超过5个分支时，尽量用switch 代替if else
* 避免使用正则表达式
* 使用System.arraycopy 来代替循环拷贝数组
* 集合初始化时，尽量指定集合大小
* 尽量使用Arrays.asList 转换数组为列表
* 避免在循环中捕获异常
* 尽量减少同步代码块的范围
:::
