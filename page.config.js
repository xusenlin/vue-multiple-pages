const fs = require("fs");
const Config = require("./src/config/page.js");

let pageConfig = {};

function addPageConfig(path, dir) {
  if (isPage(path + "/" + dir)) {
    if (pageConfig.hasOwnProperty(dir)) {
      throw new Error("有名字重复的页面:" + dir);
    }
    let template = "public/index.html";

    if (fs.existsSync(path + "/" + dir + "/index.html")) {
      template = path + "/" + dir + "/index.html";
    }
    pageConfig[dir] = {
      entry: path + "/" + dir + "/index.js",
      filename: dir + ".html",
      path: dir,
      title: Config.hasOwnProperty(dir) ? Config[dir].title : "",
      template: template
    };
  }
  let fileOrDir = fs.readdirSync(path + "/" + dir);
  fileOrDir.forEach(function(file) {
    let newDir = path + "/" + dir;
    if (fs.statSync(newDir + "/" + file).isDirectory()) {
      addPageConfig(newDir, file);
    }
  });
}

function isPage(dir) {
  return fs.existsSync(dir + "/index.js") && fs.existsSync(dir + "/Index.vue");
}

addPageConfig("src", "pages");

module.exports = pageConfig;
