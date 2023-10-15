var generateRoutes = require('./sidebar/index.js')
let routes = generateRoutes('../../')

module.exports = {
  title:"🎈 Eylen's Blog",
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  themeConfig: {
    sidebar: routes
  }
}
