<template><div><p>13.1.	基本规范
Thaicloud DB 脚本放在 dbscript-th/src/main/resources/liquibase 目录下
TMSTH DB 脚本放在 dbscript-tmsth/src/main/resources/liquibase 目录下
DB01_Platform   放平台级别脚本
DB02_Tenant     放租户级别脚本
DB01_Demo      放demo 环境专属脚本
新脚本版本通过目录名来确定，  版本目录命名规则： 版本名全部小写， v2.0.bxxx
如果是平台的脚本，dbscript-th和dbscript-tmsth工程都要提交。
如果是hotfix脚本，需要在版本目录号后加上_hotfix01, _hotfix02…这样的后缀。</p>
<p>	脚本命名规则，  yyyymmddhhMM_<tracker no><em>[ddl|dml].[sql|xml], 例如：
202211091451_artf2933424_dml.sql
202211091451_artf2933424_ddl.xml
优先使用sql 格式 具体如果使用参考liquibase 文档
https://docs.liquibase.com/concepts/changelogs/sql-format.html
	changeset 命名规则  author，  id 必填，   author 为提交人，  id=&quot;&lt;当前脚本文件名称&gt;</em>&lt;数字序号&gt;&quot;
序号 在当前文件中唯一， 比如 001, 002, 003, ...
执行时，每个changeset 都会在独立的事物里运行
changeset 执行后就不能再修改，除非修改changesetid为新id， 否则报错。</p>
<p>	本地调试：
与普通springboot applicatioin 一样的调试方式，  修改下面图中文件的版本号来测试自己的新版本。</p>
</div></template>


