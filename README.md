# vueMultiplePages

## 一个 Vue 多页面应用,适用于移动端不需要单页应用（SPA）的场景


```
yarn build:dev  //打包开发环境
yarn build:pre //打包测试环境
yarn build // 打包正式环境
```

> 番外： [MareWood](https://github.com/xusenlin/MareWood) 是一个 Go 开发的轻量级前端部署工具,可以很灵活的配置各种打包部署环境并提供访问,特别是远程的时候，方便后端和测试使用,草鸡好用。

本人做了很多H5相关的项目，如 M站、微信活动页面、原生App内嵌H5页面（jsBridge交互），从实践过程中，真的不建议大家在这部分做单页应用（SPA），首先微信里面的H5页面
在安卓和ios的url机制不一样，因此会导致两边的微信签名需要针对不同平台处理，当项目越来越大的时候，从其他应用跳转到这个应用的时候，即使你只使用其中一个页面，但是可能需要你去处理路由
和权限，页面的复用性没有多页面的好。使用多页面的话每个页面之间没有多余的联系，我可以配置好每个页面的标题，每个页面的url必须携带的参数等，页面之间的跳转可以直接
`window.location.href = `也可以通过 jsBridge(在原生app的环境)去跳转。

# 更新日志

### 第三次重构（2022.08）最新vueCli v5.0.8  + Vue(<script setup>) v3.2 + vant v4.0

在后台重构的时候我选择了vite,虽然vite现阶段带来了很棒的开发体验，但是它的多页面配置在开发阶段和打包上线阶段的不一致会
导致页面跳转得不完美，即使目前有很多插件去支持多页面，但是都不是很完美，因此我选择继续使用vuecli,如果有一天vite有了更好的解决方式，
我会第一时间重构到 vite + ts。

- 添加了 axios 请求库，并做了简单的拦截。
- 添加了漂亮的移动端调试工具 eruda,方便在手机上调试（使用 npm run build 命令不会出现此工具）。
- 修改了 Url 参数验证和初始化，`window.$pageParams` 保存了 Url 携带的参数对象。`let { id } = window.$pageParams;`
- `window.$pageName` 表示当前页面的名字，如 demo 目录生成 demo.html，window.$pageName 就是 demo
- 支持pages目录无限嵌套，只要一个目录里面包含`main.js`和`App.js`,就会认为当前目录是一个html页面。因此可以合理的通过目录来分类你的html页面。
- 封装了微信 jsSdk 的常用签名分享等一堆堆常用的东西，食用前请先安装 weixin-js-sdk并引入。
- 将postcss-px2rem重构为postcss-px-to-viewpor自动将px单位转换vw，更好的适配方案，目前为了和大部分 ui 库兼容，设置的设计稿宽度为 375，可自行修改。
- 没有路由（vue-route）,页面跳转请使用`window.location.href = "./demo.html" + obj2StrParams(params);`
- 所有的页面默认使用public/index.html作为模板，除非你在页面目录下添加index.html。
- 每次添加页面目录需要重新运行 npm run dev


### 第二次重构(2020.01) 全新依赖和ESLint+Prettier重构 v0.0.1
此版本的说明请切换分支版本查看


### 其他

我们还需要 fastclick js 去解决移动端点击 300ms 延迟吗？
从 Chrome 32（早在 2014 年）开始，这种针对移动设备优化的网站的延迟就消失了，
而无需消除缩放问题！Firefox 和 IE / Edge 之后不久也做了同样的事情，并在 2016 年 3 月在 iOS 9.3 中进行了类似的修复。
只要您 head 包括：

```html
<meta name="viewport" content="width=device-width" />
```

浏览器就会以这种方式假定您已使文本在移动设备上可读，因此无需fastclick。

---

还有各种移动端奇形怪状的问题解决方案
https://juejin.im/post/5d6e1899e51d453b1e478b29


