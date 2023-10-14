const fs = require('fs');
const path = require('path');

const pre = '../../'

function getMdFiles(dir, parent) {
  const files = fs.readdirSync(dir);
  let fileList = []
  files.forEach(file => {
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
module.exports = routes;