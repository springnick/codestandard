import comp from "E:/test/vuepress1/vuepress-starter/docs/.vuepress/.temp/pages/本手册专有名词.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%9C%AC%E6%89%8B%E5%86%8C%E4%B8%93%E6%9C%89%E5%90%8D%E8%AF%8D.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"附2：本手册专有名词\",\"slug\":\"附2-本手册专有名词\",\"link\":\"#附2-本手册专有名词\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"本手册专有名词.md\"}")
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
