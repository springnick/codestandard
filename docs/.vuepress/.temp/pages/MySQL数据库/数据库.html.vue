<template><div><h1 id="五、mysql数据库" tabindex="-1"><a class="header-anchor" href="#五、mysql数据库"><span>五、MySQL数据库</span></a></h1>
<h2 id="一-建表规约" tabindex="-1"><a class="header-anchor" href="#一-建表规约"><span>(一) 建表规约</span></a></h2>
<ol start="2">
<li>命名规范
数据库相关命名 同样也应该在统一，达意基础上尽量简洁，简洁的命名可以减少写sql 时的工作量， 日常工作中开发、测试会经常需要写各种sql ， 简洁的命名可以提高工作效率， sql 语句也会更简洁易懂。</li>
<li>表名
数据库表名应该只包含字母，数字，下划线(<em>),  全部小写命名，不同单词之间用下划线分割， 统一以t</em> 开头,  尽量用名词单数形式表示。表名避免出现数据库关键字。
如 t_policy, t_policy_doc,
同一个业务模块/用途的表名应该用统一的前缀命名， 如 t_prom_camp, t_prom_promcode
命名尽量简短
数据库中archive 表统一加 _arc 后缀， 比如t_policy_arc
临时表命名都加上_tmp 后缀</li>
<li>列名
列名应该只包含字母，数字，下划线， 用下划线进行分割。 全部小写命名，尽量避免出现大写，尽量用名词单数形式表示。
列名避免出现数据库关键字。
命名尽量简短
不同表存放相同数据的列名，类型应该保持一致
正例： user_name
反例： UserName, column</li>
<li>索引名
索引名应该只包含字母，数字，下划线， 用下划线进行分割。 全部小写命名，尽量避免出现大写，尽量用名词单数形式表示。
索引名避免出现数据库关键字。
索引名统一以idx_ 开头</li>
<li>脚本命名
数据库脚本文件命名规则为 yyyymmddhhMM_<tracker no><em>[ddl|dml].sql，  如202301121523_artf321432_dml.sql
Liquibase changeset 命名为&lt;脚本名称&gt;</em>&lt;数字序号&gt; , 如 202301121523_artf321432_dml_001</li>
<li>格式规范
SQL 语句格式 可以写在一行或者多行。为了提高可读性，各子句分行写，必要时使用缩进。 最好用sql 工具进行格式化。
每条语句以 ;结束， Sql 语句全部小写
复杂SQL 语句要加上注释说明意图</li>
</ol>
</div></template>


