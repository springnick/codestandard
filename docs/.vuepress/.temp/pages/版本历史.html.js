import comp from "E:/test/vuepress1/vuepress-starter/docs/.vuepress/.temp/pages/版本历史.html.vue"
const data = JSON.parse("{\"path\":\"/%E7%89%88%E6%9C%AC%E5%8E%86%E5%8F%B2.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"附1：版本历史\",\"slug\":\"附1-版本历史\",\"link\":\"#附1-版本历史\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"版本历史.md\"}")
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
