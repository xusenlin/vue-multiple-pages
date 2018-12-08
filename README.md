# vueCli3Mobile
## 一个开箱即用的移动端vue多页面脚手架。规划了目录，添加了常用组件和库。

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

## 说明
* 使用normalize.css重置样式。
* 添加了axios请求库，并做了简单的拦截。
*添加了fastclick解决移动端300ms点击延迟。
*添加了Vant UI库,基本能满足大部分交互。
* 添加postcss-px2rem自动将px转换为rem适配移动端，目前为了和大部分ui库兼容，设置的设计稿宽度为375，可自行修改。
* 添加页面请在pages文件夹下新建目录，在里面放置index.js和Index.vue（建议复制template文件夹修改名字进行开发）。编译后，目录的名字即为网页的名字。至于为什么？请查看page.config.js。

