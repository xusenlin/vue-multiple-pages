const path = require("path");
const fs = require("fs");
const pageConfig = require("../../config/page.js");

exports.getPageDir = function() {
  if (__dirname.toString().indexOf("src") === -1) {
    console.log("请将工具放到src的子目录下，以便定位目录");
    process.exit();
  }
  return path.resolve(__dirname.split("src")[0], "./src/pages/");
};

exports.existsPage = function(name) {
  return pageConfig.hasOwnProperty(name);
};

exports.updatePageConfig = function(name) {
  if (pageConfig.hasOwnProperty(name)) {
    console.log(name + "页面已经存在，请使用其他名字");
    process.exit();
  }

  let config = fs.readFileSync("../../config/page.js").toString();

  let configStr = `{
  ${name}: {
    title: "页面标题${name}",
    requiredParams: {},
    optionalParams: {}
  },`;
  try {
    fs.writeFileSync("../../config/page.js", config.replace("{", configStr));
    console.log("生成配置成功，请手动配置src/config/page.js文件的页面标题。");
  } catch (e) {
    console.log("生成配置失败，请手动配置src/config/page.js文件");
  }
};
