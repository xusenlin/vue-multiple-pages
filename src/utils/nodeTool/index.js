const fs = require("fs");

const Argv = require("./analysisArgv.js");
let JsTemplate = require("./jsTemplate.js");
let VueTemplate = require("./vueTemplate.js");
const Utils = require("./utils.js");

const pageDir = Utils.getPageDir();

if (Utils.existsPage(Argv.n)) {
  console.log(Argv.n + "页面已经存在，请使用其他名字");
  process.exit();
}

let workPageDir;

try {
  workPageDir = pageDir + "/" + Argv.n;
  if (Argv.hasOwnProperty("p")) {
    if (!fs.existsSync(pageDir + "/" + Argv.p)) {
      console.log("asd");
      fs.mkdirSync(pageDir + "/" + Argv.p);
    }
    workPageDir = pageDir + "/" + Argv.p + "/" + Argv.n;
  }
  fs.mkdirSync(workPageDir);
  console.log("创建目录" + Argv.n + "成功");
} catch (e) {
  console.log("创建目录失败，请检查目录是否已经存在！");
  console.log(e.toString());
  process.exit();
}
Utils.updatePageConfig(Argv.n);

VueTemplate.replace('id="app"', 'id="' + Argv.n + '"');
VueTemplate.replace("#app", "#" + Argv.n);

fs.writeFileSync(
  workPageDir + "/Index.vue",
  VueTemplate.replace('id="app"', 'id="' + Argv.n + '"')
);
fs.writeFileSync(workPageDir + "/index.js", JsTemplate);

console.log("生成页面成功，请重新运行npm run dev");
