# vueMultiplePages

## 一个Vue多页面应用

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Compiles and minifies for production
```
yarn build:dev  //打包开发环境
yarn build:devtest //打包开发测试环境
yarn build:test //打包测试环境
yarn build // 打包正式环境
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 说明
* 使用normalize.css重置样式。
* 添加了axios请求库，并做了简单的拦截。
* 添加了漂亮的移动端调试工具eruda（使用npm run build命令不会出现此工具）。
* 添加了Url参数验证和初始化，window.PAGE_PARAMS保存了Url携带的参数对象。
* window.PAGE_PATH 表示当前页面的名字，如index目录生成index.html，window.PAGE_PATH就是index
* 想要添加自己 UI库,安装好在common.js引用即可。
* 添加postcss-px2rem自动将px转换为rem适配移动端，目前为了和大部分ui库兼容，设置的设计稿宽度为375，可自行修改。
* 添加了node工具，在src/utils/nodeTool下，运行node index.js -h 即可查看使用方法。
* 添加页面请在pages文件夹下新建目录，在里面放置index.js和Index.vue（建议使用提供的node工具生成页面，他会更新你的配置）。编译后，目录的名字即为网页的名字。至于为什么？请查看page.config.js。

注意：如果页面太多，可以通过在pages下添加分组目录来分类页面,
适用于移动端不需要单页应用（SPA）的场景，没有路由（vue-route）,页面跳转请使用
```javascript
window.location.href = "./demo.html" + obj2StrParams(params)
```


### 其他
我们还需要fastclick js去解决移动端点击300ms延迟吗？
从Chrome 32（早在2014年）开始，这种针对移动设备优化的网站的延迟就消失了，
而无需消除缩放问题！Firefox和IE / Edge之后不久也做了同样的事情，并在2016年3月在iOS 9.3中进行了类似的修复。
只要您<head>包括：<meta name="viewport" content="width=device-width">，浏览器就会以这种方式假定您已使文本在移动设备上可读，因此无需双击。

---
还有各种移动端奇形怪状的问题解决方案
https://juejin.im/post/5d6e1899e51d453b1e478b29
