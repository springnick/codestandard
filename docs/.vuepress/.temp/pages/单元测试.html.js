import comp from "E:/test/vuepress1/vuepress-starter/docs/.vuepress/.temp/pages/单元测试.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"三、单元测试\",\"slug\":\"三、单元测试\",\"link\":\"#三、单元测试\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"单元测试.md\"}")
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
