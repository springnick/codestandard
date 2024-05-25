import comp from "E:/test/vuepress1/vuepress-starter/docs/.vuepress/.temp/pages/编程规约/并发处理.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%BC%96%E7%A8%8B%E8%A7%84%E7%BA%A6/%E5%B9%B6%E5%8F%91%E5%A4%84%E7%90%86.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"(六) 并发处理\",\"slug\":\"六-并发处理\",\"link\":\"#六-并发处理\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"编程规约/并发处理.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
