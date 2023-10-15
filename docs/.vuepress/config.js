var generateRoutes = require('./sidebar/index.js')
let routes = generateRoutes('../../')

module.exports = {
  base:'/myBlog/',
  title:"🎈 Eylen's Blog",
  // theme: '@vuepress/blog',
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  head: [
    // 引入自定义js
    ["script", {"language": "javascript", "type": "text/javascript", "src": "/js/pgmanor-self.js"}]
  ],
  plugins: ['fulltext-search',['vuepress-plugin-code-copy', true]],
  // plugins: [
  //   ['@vuepress/search', {
  //     searchMaxSuggestions: 10
  //   }]
  // ],
  themeConfig: {
    sidebar: routes
  }
}
