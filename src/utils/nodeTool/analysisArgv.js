let Argv = {};
const option = [
  { name: "-n", description: "新建的页面(文件夹)名字" },
  { name: "-h", description: "查看帮助" },
  {
    name: "-p",
    description: "父目录的名字(文件夹)，(有此参数-n会被新建在此目录下)"
  }
];

let argvLen = process.argv.length;
if (argvLen <= 2) {
  console.log('请使用"-h"参数查看帮助');
  process.exit();
}

let argvVal = process.argv.slice(2, argvLen);

argvVal.forEach(r => {
  let data = r.split("=");
  let reg = /[a-zA-Z0-9_]*/;
  let key = data[0].replace("-", "");
  let val = reg.exec(data[1])[0];
  if ("h" === key) {
    console.table(option);
    process.exit();
  }
  if (key && val) {
    Argv[key] = val;
  }
});

if (Object.keys(Argv).length === 0) {
  console.log('参数有误，请使用"-h"参数查看帮助');
  process.exit();
}

if (!Argv.n) {
  console.log('"-n"是必填参数');
  process.exit();
}

module.exports = Argv;
