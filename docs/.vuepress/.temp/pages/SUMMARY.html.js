import comp from "E:/test/vuepress1/vuepress-starter/docs/.vuepress/.temp/pages/SUMMARY.html.vue"
const data = JSON.parse("{\"path\":\"/SUMMARY.html\",\"title\":\"Summary\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"SUMMARY.md\"}")
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
