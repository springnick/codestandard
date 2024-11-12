<template><div><ol>
<li>
<p>html, css, less所有目录，文件名（包括后缀名）都应该使用小写字母，数字命名, 用- 隔开, 产品Code，TenantCode、常用大写缩写等除外
正例： html/ctpl/quote.html
反例： Html/CTPL/Quote.html</p>
</li>
<li>
<p>元素id, name 命名必须用保证页面唯一， 全部用小写字母与数字， 使用小驼峰规则。
正例： policyListPannel</p>
</li>
<li>
<p>同一页面应该避免使用相同的name 与id
说明： 相同id, name 在进行元素查找时，容易混淆， 而且不容易区别</p>
</li>
<li>
<p>标签class 命名全部使用小写字母，加数字， 单词间用- 分割</p>
</li>
<li>
<p>标签与属性名称全部使用小写。 属性值用双引号包围， 不应该使用单引， 自定义属性以data- 为前缀</p>
</li>
<li>
<p>js/jsx方法名、参数名、成员变量、局部变量等都统一使用lowerCamelCase风格</p>
</li>
<li>
<p>常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长.</p>
</li>
<li>
<p>文件名，目录名小写，多个单词之间用-隔开，产品Code，TenantCode、常用大写缩写等除外</p>
</li>
<li>
<p>项目使用了MVC 模式， 用Jsx 编写页面的model, controller, service. 这些model, controller, service 都应该使用对应的后缀标明文件作用。而且这些Jsx 文件名应该与对应的页面文件名 保持一致
比如 html 文件为： html/diy/travel/quote.html,
对应的jsx 文件为:
js/diy/travel/travel-controller.jsx
js/diy/travel/travel-model.jsx
js/diy/travel/travel-layout.jsx
js/diy/travel/travel-service.jsx</p>
</li>
<li>
<p>Jsx组件名及对应的文件名使用UpperCamelCase风格,
比如 Policy.jsx</p>
</li>
<li>
<p>文件名，目录名小写，多个单词之间用-隔开，产品Code，TenantCode、常用大写缩写等除外。</p>
</li>
</ol>
</div></template>


