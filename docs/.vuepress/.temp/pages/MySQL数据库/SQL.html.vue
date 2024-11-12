<template><div><ol>
<li>
<p>SQL 中Drop table，Truncate table  禁止使用, 如果确实需要必须经过包括架构师等2人以上review才能上生产 .</p>
</li>
<li>
<p>大范围Delete要谨慎使用， 能避免就避免, 必须使用的要先经过其他人Peer Review，删除数据前必须保证被删除的数据先备份到临时表中事物提交后，再从源表删除数据。</p>
</li>
<li>
<p>新建业务表必须要包含主键,审计字段(INSERT_TIME, INSERT_USER_ID,UPDATE_TIME,UPDATE_USER_ID)。</p>
</li>
<li>
<p>如果表的字段值是固定几个常量值，要加上comment列举出来，
比如t_pol_idx表的biz_type字段要加上COMMENT '1: b2b 2: b2c 3: b2b2c'。</p>
</li>
<li>
<p>对于查询频率高的字段要建立索引。
但是下面这些情况下，索引会失效，开发时要注意：
like 以%开头，索引无效；当like前缀没有%，后缀有%时，索引有效。
or语句前后没有同时使用索引。
组合索引，不是使用第一列索引，索引失效。
如果列类型是字符串，那一定要在条件中将数据使用引号引用起来，否则不使用索引。
在索引列上使用 IS NULL 或 IS NOT NULL操作。
在索引字段上使用not，&lt;&gt;，!=。
对索引字段进行计算操作、字段上使用函数</p>
</li>
<li>
<p>编写sql要遵守only_full_group_by规则，规则核心原则如下：
order by后面的列必须是在select distinct后面存在的；
select、having或order by后面存在的非聚合列必须全部在group by中存在 (如果group by的字段是有唯一索引的，是可以select其他的字段的)。</p>
</li>
<li>
<p>优先使用符合需求的存储空间最小的数据类型</p>
</li>
<li>
<p>禁用外键约束
在表中禁止创建外键约束， 避免影响写操作性能，并维护困难</p>
</li>
<li>
<p>禁止在数据库中存放图片，文件等二进制数据</p>
</li>
<li>
<p>每个表都应该有自己的主键, 主键以pk_ 前缀开始</p>
</li>
<li>
<p>联合索引的创建规则：
区分度高的列放在最左侧
尽量把字段长度小的列放在左侧
把使用频繁的放在左侧</p>
</li>
<li>
<p>避免使用text/Blob 数据类型
如果确实需要可以放在单独的扩展表中</p>
</li>
<li>
<p>尽可能把所有列定义为not null
查询时如果数据有null, 索引会失效</p>
</li>
<li>
<p>财务相关的金额使用decimal 类型
Decimal 计算时不丢失精度</p>
</li>
</ol>
</div></template>


