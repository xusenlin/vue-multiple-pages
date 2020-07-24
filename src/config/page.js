//这里做页面参数约定和说明，如果url没有携带requiredParams的参数则无法初始化页面
module.exports = {
  demo: {
    title: "演示",
    requiredParams: {},
    optionalParams: {
      //必填参数
      userId: "url必须携带用户Id"
    }
  },
  index: {
    title: "首页",
    requiredParams: {}
  },
  indexA: {
    title: "首页A",
    requiredParams: {}
  },
  indexB: {
    title: "首页B",
    requiredParams: {}
  }
};
