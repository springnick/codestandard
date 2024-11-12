<template><div><ol>
<li>一般规范
<ol>
<li>数据库脚本(包括initial DB脚本，自己加的ddl/dml脚本) 都要先在dev数据库执行。</li>
<li>本地正常开发要连dev数据库开发，不要直接连test等其他环境的数据库开发。</li>
<li>新做的大的平台功能、客户需求（effort&gt;=16h）都需要写unit test. 所有开发代码都需要先在本地自测、Review通过再提交。</li>
<li>跟外边集成的API, 为了便于调查问题， 需要把API Request/Respone 都记录到DB 里, 记录log 时，有敏感字段时应该加密保存， 同时记录API 的关联数据如policyId 等， 以便快速查找，定位。</li>
</ol>
</li>
<li>分支与代码提交
<ol>
<li>
<p>下面情况必须要开新git分支 来开发：
在下次发生产时需要回滚，而且回滚修改或回滚后测试时间超过1小时的新功能或者回滚改动点超过3个的新功能，新产品
判断是否需要回滚的标准：
影响现有平台功能或产品功能或性能， 而且新代码在发生产时测试无法完成或者 需要客户确认的功能客户还确认</p>
</li>
<li>
<p>新分支代码在合并到开发流前，要保证新分支代码通过了所有影响点的测试， 而且生产发布时不需要回滚或者做到回滚很容易（比如通过配置关闭）</p>
</li>
<li>
<p>提交代码时如果遇到服务器上有新的更新， 要选择rebase 选项进行合并
避免git log 里产生新的分支合并线，造成历史记录查看困难</p>
</li>
<li>
<p>提交代码之前需要reformat code，保持代码美观，便于阅读。</p>
</li>
<li>
<p>提交代码时必须先review一下要提交的文件的改动，不要把不相关的（比如本地临时调试的代码）或者只是为了本地改的代码提交上去。</p>
</li>
<li>
<p>提交代码时comments里一定要有track号，并且track号要和实际改的代码对应，不要随便填track号，以便于后续问题调查和维护，填写格式如下：
artf123xxxx : [Platform]xxxxxxxxxxxxxxxxxxx，
如果是rollback，填写格式为:rollback artf123xxxx : [Platform]xxxxxxxxxxxxxxxxxxx，
如果是restore，填写格式为:restore artf123xxxx : [Platform]xxxxxxxxxxxxxxxxxxx。</p>
</li>
</ol>
</li>
</ol>
</div></template>


