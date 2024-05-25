import comp from "E:/test/vuepress1/vuepress-starter/docs/.vuepress/.temp/pages/工程结构/服务器.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%B7%A5%E7%A8%8B%E7%BB%93%E6%9E%84/%E6%9C%8D%E5%8A%A1%E5%99%A8.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"(三) 服务器\",\"slug\":\"三-服务器\",\"link\":\"#三-服务器\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"工程结构/服务器.md\"}")
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
