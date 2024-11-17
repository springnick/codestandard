# 数据库
## 建表规约
1.	命名规范
数据库相关命名 同样也应该在统一，达意基础上尽量简洁，简洁的命名可以减少写sql 时的工作量， 日常工作中开发、测试会经常需要写各种sql ， 简洁的命名可以提高工作效率， sql 语句也会更简洁易懂。
2.	表名
数据库表名应该只包含字母，数字，下划线(_),  全部小写命名，不同单词之间用下划线分割， 统一以t_ 开头,  尽量用名词单数形式表示。表名避免出现数据库关键字。
 如 t_policy, t_policy_doc, 
同一个业务模块/用途的表名应该用统一的前缀命名， 如 t_prom_camp, t_prom_promcode
命名尽量简短
数据库中archive 表统一加 _arc 后缀， 比如t_policy_arc
临时表命名都加上_tmp 后缀
3.	列名
列名应该只包含字母，数字，下划线， 用下划线进行分割。 全部小写命名，尽量避免出现大写，尽量用名词单数形式表示。
列名避免出现数据库关键字。
命名尽量简短
不同表存放相同数据的列名，类型应该保持一致
正例： user_name
反例： UserName, column
4.	索引名
索引名应该只包含字母，数字，下划线， 用下划线进行分割。 全部小写命名，尽量避免出现大写，尽量用名词单数形式表示。
索引名避免出现数据库关键字。
索引名统一以idx_ 开头
5.	脚本命名
数据库脚本文件命名规则为 yyyymmddhhMM_`<tracker no>`_[ddl|dml].sql，  如202301121523_artf321432_dml.sql
Liquibase changeset 命名为<脚本名称>_<数字序号> , 如 202301121523_artf321432_dml_001 
6.	格式规范
SQL 语句格式 可以写在一行或者多行。为了提高可读性，各子句分行写，必要时使用缩进。 最好用sql 工具进行格式化。 
每条语句以 ;结束， Sql 语句全部小写
复杂SQL 语句要加上注释说明意图

## SQL
1.	SQL 中Drop table，Truncate table  禁止使用, 如果确实需要必须经过包括架构师等2人以上review才能上生产 . 
2.	大范围Delete要谨慎使用， 能避免就避免, 必须使用的要先经过其他人Peer Review，删除数据前必须保证被删除的数据先备份到临时表中事物提交后，再从源表删除数据。
3.	新建业务表必须要包含主键,审计字段(INSERT_TIME, INSERT_USER_ID,UPDATE_TIME,UPDATE_USER_ID)。
4.	如果表的字段值是固定几个常量值，要加上comment列举出来，
比如t_pol_idx表的biz_type字段要加上COMMENT '1: b2b 2: b2c 3: b2b2c'。

5.	对于查询频率高的字段要建立索引。
但是下面这些情况下，索引会失效，开发时要注意：
like 以%开头，索引无效；当like前缀没有%，后缀有%时，索引有效。
or语句前后没有同时使用索引。
组合索引，不是使用第一列索引，索引失效。
如果列类型是字符串，那一定要在条件中将数据使用引号引用起来，否则不使用索引。
在索引列上使用 IS NULL 或 IS NOT NULL操作。
在索引字段上使用not，<>，!=。
对索引字段进行计算操作、字段上使用函数
6.	编写sql要遵守only_full_group_by规则，规则核心原则如下：
order by后面的列必须是在select distinct后面存在的；
select、having或order by后面存在的非聚合列必须全部在group by中存在 (如果group by的字段是有唯一索引的，是可以select其他的字段的)。
7.	优先使用符合需求的存储空间最小的数据类型
8.	禁用外键约束
在表中禁止创建外键约束， 避免影响写操作性能，并维护困难
9.	禁止在数据库中存放图片，文件等二进制数据
10.	每个表都应该有自己的主键, 主键以pk_ 前缀开始
11.	联合索引的创建规则：
区分度高的列放在最左侧
尽量把字段长度小的列放在左侧
把使用频繁的放在左侧
12.	避免使用text/Blob 数据类型
如果确实需要可以放在单独的扩展表中
13.	尽可能把所有列定义为not null
查询时如果数据有null, 索引会失效
14.	财务相关的金额使用decimal 类型
Decimal 计算时不丢失精度

## Thaicloud 脚本
### 基本规范
   Thaicloud DB 脚本放在 dbscript-th/src/main/resources/liquibase 目录下
TMSTH DB 脚本放在 dbscript-tmsth/src/main/resources/liquibase 目录下
 DB01_Platform   放平台级别脚本
 DB02_Tenant     放租户级别脚本
 DB01_Demo      放demo 环境专属脚本
 新脚本版本通过目录名来确定，  版本目录命名规则： 版本名全部小写， v2.0.bxxx
如果是平台的脚本，dbscript-th和dbscript-tmsth工程都要提交。
如果是hotfix脚本，需要在版本目录号后加上_hotfix01, _hotfix02…这样的后缀。
 
### 脚本命名规则  
yyyymmddhhMM_`<tracker no>`_[ddl|dml].[sql|xml], 例如： 
202211091451_artf2933424_dml.sql
202211091451_artf2933424_ddl.xml
优先使用sql 格式 具体如果使用参考liquibase 文档
https://docs.liquibase.com/concepts/changelogs/sql-format.html

###	changeset 命名规则  
author，  id 必填，   author 为提交人，  id="<当前脚本文件名称>_<数字序号>"
序号 在当前文件中唯一， 比如 001, 002, 003, ...
执行时，每个changeset 都会在独立的事物里运行
changeset 执行后就不能再修改，除非修改changesetid为新id， 否则报错。

###	本地调试
   与普通springboot applicatioin 一样的调试方式，  修改下面图中文件的版本号来测试自己的新版本。
