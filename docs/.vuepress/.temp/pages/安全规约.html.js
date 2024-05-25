import comp from "E:/test/vuepress1/vuepress-starter/docs/.vuepress/.temp/pages/安全规约.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%AE%89%E5%85%A8%E8%A7%84%E7%BA%A6.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"四、安全规约\",\"slug\":\"四、安全规约\",\"link\":\"#四、安全规约\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"安全规约.md\"}")
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
