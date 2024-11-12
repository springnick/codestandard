1.	产品配置时 产品版本目录必须全部小写 ，比如 CMI/v1
2.	产品配置的excel 文件名全部小写， 用_分割
正例： cmi_plan_rates.xsl
反例： CMI_plan_rates.xsl
3.	产品配置的excel 里，只放尽量少的真正要用的数据， 尽量减小excel 文件大小
这个excel 文件最终要加载到内存中， 所以要尽量小， 而且文件大了，解析时间会拖慢服务启动时间
4.	产品配置里产品code, coverage code, plan code 等都全部大小，用_分割
5.	各coverage/interest/limit 要加上注释，标明对应的coverage/interest/limit 英文名
6.	流程配置各dsl 文件名全部小写，用_分割
7.	只有全局通用， 而且各个租户、产品需要定制的功能才用dsl 来实现， 其他能不用dsl ,就不用dsl
dsl 解析等都需要时间，而且生成大量的类， 驻留再内存中。
8.	缓存配置：影响产品结构、保费的各个变量，都要加入到Cache 配置块里， 否则会导致缓存问题。
9.	BaseDSLClass文件里的方法不要随意添加，要先看是否已有可用的方法，要新加的话也要尽量通用。
10.	新加产品时从其他产品copy过来的dsl，每个都要检查一下，看是否是本产品需要的配置，不需要的dsl或配置要删掉。
11.	Plan 定义时不要在外面加控制语句，而是要把控制语句写到Filters代码块内，这样product maintenance才可以自动获取plan。
12.	加新类型的dsl文件需要AA/AD Lead审核。
