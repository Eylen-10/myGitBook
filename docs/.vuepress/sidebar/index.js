const fs = require('fs');
const path = require('path');

function generateRoutes(pre='../../'){
  
  function getMdFiles(dir, parent) {
    const files = fs.readdirSync(dir);
    let fileList = []
    files.forEach(file => {
      if(!file.includes('.md')) return;
      const filePath = path.join(dir, file);
      let relative = path.relative(dir, filePath).replace(/\.md$/, '').replace(/\\/g, '/');
      fileList.push(encodeURI(`/${parent}/${relative}`));
    });
  
    return fileList;
  }
  function getGroup(pre){
    return fs.readdirSync(path.resolve(__dirname, pre))
      .filter(filePath => !filePath.includes('.vuepress') && fs.statSync(path.join(path.resolve(__dirname, pre), filePath)).isDirectory());
  }
  const dirs = getGroup(pre)
  let routes = []
  for(let dir of dirs){
    let list = getMdFiles(path.join(path.resolve(__dirname, pre), dir), dir)
    routes.push({
      title: dir,
      collapsable: true,
      sidebarDepth: 0,
      children: list
    })
  }
  return routes;
}
module.exports = generateRoutes;