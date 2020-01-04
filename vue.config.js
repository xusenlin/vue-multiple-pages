let pagesConfig = require("./page.config.js");

const px2rem = require("postcss-px2rem");

const postcss = px2rem({
  remUnit: 100
});

module.exports = {
  publicPath: "./",
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  pages: pagesConfig,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  }
};
