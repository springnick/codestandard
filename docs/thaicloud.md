# 项目
##	一般规范
1.	数据库脚本(包括initial DB脚本，自己加的ddl/dml脚本) 都要先在dev数据库执行。
2.	本地正常开发要连dev数据库开发，不要直接连test等其他环境的数据库开发。
3.	新做的大的平台功能、客户需求（effort>=16h）都需要写unit test. 所有开发代码都需要先在本地自测、Review通过再提交。
4.	跟外边集成的API, 为了便于调查问题， 需要把API Request/Respone 都记录到DB 里, 记录log 时，有敏感字段时应该加密保存， 同时记录API 的关联数据如policyId 等， 以便快速查找，定位。

## Rule
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

## Web
1.	html, css, less所有目录，文件名（包括后缀名）都应该使用小写字母，数字命名, 用- 隔开, 产品Code，TenantCode、常用大写缩写等除外
正例： html/ctpl/quote.html
反例： Html/CTPL/Quote.html

2.	元素id, name 命名必须用保证页面唯一， 全部用小写字母与数字， 使用小驼峰规则。
正例： policyListPannel

3.	同一页面应该避免使用相同的name 与id
说明： 相同id, name 在进行元素查找时，容易混淆， 而且不容易区别

4.	标签class 命名全部使用小写字母，加数字， 单词间用- 分割

5.	标签与属性名称全部使用小写。 属性值用双引号包围， 不应该使用单引， 自定义属性以data- 为前缀

6.	js/jsx方法名、参数名、成员变量、局部变量等都统一使用lowerCamelCase风格

7.	常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长.

8.	文件名，目录名小写，多个单词之间用-隔开，产品Code，TenantCode、常用大写缩写等除外

9.	项目使用了MVC 模式， 用Jsx 编写页面的model, controller, service. 这些model, controller, service 都应该使用对应的后缀标明文件作用。而且这些Jsx 文件名应该与对应的页面文件名 保持一致
比如 html 文件为： html/diy/travel/quote.html, 
对应的jsx 文件为:
js/diy/travel/travel-controller.jsx
js/diy/travel/travel-model.jsx
js/diy/travel/travel-layout.jsx
js/diy/travel/travel-service.jsx

10.	Jsx组件名及对应的文件名使用UpperCamelCase风格, 
比如 Policy.jsx

11.	文件名，目录名小写，多个单词之间用-隔开，产品Code，TenantCode、常用大写缩写等除外。

##	分支与代码提交

1.	下面情况必须要开新git分支 来开发：
在下次发生产时需要回滚，而且回滚修改或回滚后测试时间超过1小时的新功能或者回滚改动点超过3个的新功能，新产品
判断是否需要回滚的标准：
影响现有平台功能或产品功能或性能， 而且新代码在发生产时测试无法完成或者 需要客户确认的功能客户还确认

2.	新分支代码在合并到开发流前，要保证新分支代码通过了所有影响点的测试， 而且生产发布时不需要回滚或者做到回滚很容易（比如通过配置关闭）
3.	提交代码时如果遇到服务器上有新的更新， 要选择rebase 选项进行合并
避免git log 里产生新的分支合并线，造成历史记录查看困难
4.	提交代码之前需要reformat code，保持代码美观，便于阅读。 
5.	提交代码时必须先review一下要提交的文件的改动，不要把不相关的（比如本地临时调试的代码）或者只是为了本地改的代码提交上去。
6.	提交代码时comments里一定要有track号，并且track号要和实际改的代码对应，不要随便填track号，以便于后续问题调查和维护，填写格式如下：
artf123xxxx : [Platform]xxxxxxxxxxxxxxxxxxx， 
如果是rollback，填写格式为:rollback artf123xxxx : [Platform]xxxxxxxxxxxxxxxxxxx，
如果是restore，填写格式为:restore artf123xxxx : [Platform]xxxxxxxxxxxxxxxxxxx。