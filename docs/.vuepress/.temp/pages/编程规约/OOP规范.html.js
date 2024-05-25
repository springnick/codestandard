import comp from "E:/test/vuepress1/vuepress-starter/docs/.vuepress/.temp/pages/编程规约/OOP规范.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%BC%96%E7%A8%8B%E8%A7%84%E7%BA%A6/OOP%E8%A7%84%E8%8C%83.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"(四) OOP规约\",\"slug\":\"四-oop规约\",\"link\":\"#四-oop规约\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"编程规约/OOP规范.md\"}")
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
