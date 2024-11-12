export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Summary"} }],
  ["/test.html", { loader: () => import(/* webpackChunkName: "test.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/test.html.js"), meta: {"title":""} }],
  ["/%E5%89%8D%E8%A8%80.html", { loader: () => import(/* webpackChunkName: "前言.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/前言.html.js"), meta: {"title":""} }],
  ["/%E5%AE%89%E5%85%A8%E8%A7%84%E7%BA%A6.html", { loader: () => import(/* webpackChunkName: "安全规约.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/安全规约.html.js"), meta: {"title":""} }],
  ["/%E6%9C%AC%E6%89%8B%E5%86%8C%E4%B8%93%E6%9C%89%E5%90%8D%E8%AF%8D.html", { loader: () => import(/* webpackChunkName: "本手册专有名词.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/本手册专有名词.html.js"), meta: {"title":""} }],
  ["/%E7%89%88%E6%9C%AC%E5%8E%86%E5%8F%B2.html", { loader: () => import(/* webpackChunkName: "版本历史.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/版本历史.html.js"), meta: {"title":""} }],
  ["/%E5%B7%A5%E7%A8%8B%E7%BB%93%E6%9E%84/%E4%BA%8C%E6%96%B9%E5%BA%93%E4%BE%9D%E8%B5%96.html", { loader: () => import(/* webpackChunkName: "工程结构_二方库依赖.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/工程结构/二方库依赖.html.js"), meta: {"title":""} }],
  ["/%E5%B7%A5%E7%A8%8B%E7%BB%93%E6%9E%84/%E5%BA%94%E7%94%A8%E5%88%86%E5%B1%82.html", { loader: () => import(/* webpackChunkName: "工程结构_应用分层.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/工程结构/应用分层.html.js"), meta: {"title":"六、工程结构"} }],
  ["/%E5%B7%A5%E7%A8%8B%E7%BB%93%E6%9E%84/%E6%9C%8D%E5%8A%A1%E5%99%A8.html", { loader: () => import(/* webpackChunkName: "工程结构_服务器.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/工程结构/服务器.html.js"), meta: {"title":""} }],
  ["/%E5%BC%82%E5%B8%B8%E6%97%A5%E5%BF%97/%E5%85%B6%E4%BB%96.html", { loader: () => import(/* webpackChunkName: "异常日志_其他.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/异常日志/其他.html.js"), meta: {"title":""} }],
  ["/%E5%BC%82%E5%B8%B8%E6%97%A5%E5%BF%97/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86.html", { loader: () => import(/* webpackChunkName: "异常日志_异常处理.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/异常日志/异常处理.html.js"), meta: {"title":"二、异常日志"} }],
  ["/%E5%BC%82%E5%B8%B8%E6%97%A5%E5%BF%97/%E6%97%A5%E5%BF%97%E8%A7%84%E7%BA%A6.html", { loader: () => import(/* webpackChunkName: "异常日志_日志规约.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/异常日志/日志规约.html.js"), meta: {"title":""} }],
  ["/%E7%BC%96%E7%A8%8B%E8%A7%84%E7%BA%A6/OOP%E8%A7%84%E8%8C%83.html", { loader: () => import(/* webpackChunkName: "编程规约_OOP规范.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/编程规约/OOP规范.html.js"), meta: {"title":""} }],
  ["/%E7%BC%96%E7%A8%8B%E8%A7%84%E7%BA%A6/%E4%BB%A3%E7%A0%81%E6%A0%BC%E5%BC%8F.html", { loader: () => import(/* webpackChunkName: "编程规约_代码格式.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/编程规约/代码格式.html.js"), meta: {"title":""} }],
  ["/%E7%BC%96%E7%A8%8B%E8%A7%84%E7%BA%A6/%E5%91%BD%E5%90%8D%E9%A3%8E%E6%A0%BC.html", { loader: () => import(/* webpackChunkName: "编程规约_命名风格.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/编程规约/命名风格.html.js"), meta: {"title":"1 编程规约"} }],
  ["/%E7%BC%96%E7%A8%8B%E8%A7%84%E7%BA%A6/%E5%B8%B8%E9%87%8F%E5%AE%9A%E4%B9%89.html", { loader: () => import(/* webpackChunkName: "编程规约_常量定义.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/编程规约/常量定义.html.js"), meta: {"title":""} }],
  ["/%E7%BC%96%E7%A8%8B%E8%A7%84%E7%BA%A6/%E5%B9%B6%E5%8F%91%E5%A4%84%E7%90%86.html", { loader: () => import(/* webpackChunkName: "编程规约_并发处理.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/编程规约/并发处理.html.js"), meta: {"title":""} }],
  ["/%E7%BC%96%E7%A8%8B%E8%A7%84%E7%BA%A6/%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5.html", { loader: () => import(/* webpackChunkName: "编程规约_控制语句.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/编程规约/控制语句.html.js"), meta: {"title":""} }],
  ["/%E7%BC%96%E7%A8%8B%E8%A7%84%E7%BA%A6/%E6%B3%A8%E9%87%8A%E8%A7%84%E7%BA%A6.html", { loader: () => import(/* webpackChunkName: "编程规约_注释规约.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/编程规约/注释规约.html.js"), meta: {"title":""} }],
  ["/%E7%BC%96%E7%A8%8B%E8%A7%84%E7%BA%A6/%E9%9B%86%E5%90%88%E5%A4%84%E7%90%86.html", { loader: () => import(/* webpackChunkName: "编程规约_集合处理.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/编程规约/集合处理.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/MySQL%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%95%B0%E6%8D%AE%E5%BA%93.html", { loader: () => import(/* webpackChunkName: "MySQL数据库_数据库.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/MySQL数据库/数据库.html.js"), meta: {"title":"五、MySQL数据库"} }],
  ["/groovy.html", { loader: () => import(/* webpackChunkName: "groovy.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/groovy.html.js"), meta: {"title":""} }],
  ["/MySQL%E6%95%B0%E6%8D%AE%E5%BA%93/SQL.html", { loader: () => import(/* webpackChunkName: "MySQL数据库_SQL.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/MySQL数据库/SQL.html.js"), meta: {"title":""} }],
  ["/rule.html", { loader: () => import(/* webpackChunkName: "rule.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/rule.html.js"), meta: {"title":""} }],
  ["/web/web.html", { loader: () => import(/* webpackChunkName: "web_web.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/web/web.html.js"), meta: {"title":""} }],
  ["/lmg/LMG.html", { loader: () => import(/* webpackChunkName: "lmg_LMG.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/lmg/LMG.html.js"), meta: {"title":""} }],
  ["/%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE.html", { loader: () => import(/* webpackChunkName: "项目_项目.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/项目/项目.html.js"), meta: {"title":""} }],
  ["/thaicloud/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%84%9A%E6%9C%AC.html", { loader: () => import(/* webpackChunkName: "thaicloud_数据库脚本.html" */"/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/thaicloud/数据库脚本.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
