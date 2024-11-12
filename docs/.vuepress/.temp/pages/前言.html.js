import comp from "/Users/nick/test/codestandard/docs/.vuepress/.temp/pages/前言.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E8%A8%80.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1716603228000,\"contributors\":[{\"name\":\"nick\",\"email\":\"3075307451@qq.com\",\"commits\":1}]},\"filePathRelative\":\"前言.md\"}")
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
