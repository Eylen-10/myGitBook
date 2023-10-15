const fs = require('fs');
const path = require('path');

const pre = '../'

function getMdFiles(dir, parent) {
  const files = fs.readdirSync(dir);
  let fileList = []
  files.forEach(file => {
    if(!file.includes('.md')) return
    const filePath = path.join(dir, file);
    let relative = path.relative(dir, filePath).replace(/\.md$/, '').replace(/\\/g, '/');
    fileList.push(`/${parent}/${relative}`);
  });

  return fileList;
}
function getGroup(pre){
  return fs.readdirSync(path.resolve(__dirname, pre))
    .filter(filePath => !filePath.includes('.vuepress') && fs.statSync(path.join(path.resolve(__dirname, pre), filePath)).isDirectory());
}
function generateRoutes(){
  const dirs = getGroup(pre)
  let routes = []
  for(let dir of dirs){
    let list = getMdFiles(path.join(path.resolve(__dirname, pre), dir), dir)
    routes.push({
      title: dir,
      collapsable: false,
      children: list
    })
  }
  return routes;
}
let routes = generateRoutes()


module.exports = {
  title:"🎈 Eylen's Blog",
  configureWebpack: {
    resolve: {
      alias: {
        '@asets': '../../assets'
      }
    }
  },
  markdown: {
    // ......
    extendMarkdown: md => {
      md.use(require("markdown-it-disable-url-encode"));
    }
  },
  themeConfig: {
    // nav: [
    //   { text: '数据结构与算法', link: '/数据结构与算法/binary' },
    //   { text: '前端工程化', link: '/前端工程化/VuePress' },
    // ],
    sidebar:routes
  }
}
