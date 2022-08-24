const { defineConfig } = require('@vue/cli-service')

const pxtovw = require('postcss-px-to-viewport')
const pagesConfig = require("./page.config.js");


module.exports = defineConfig({
  transpileDependencies: true,
  pages: pagesConfig,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {plugins:[
            new pxtovw({
              unitToConvert: "px",
              viewportWidth: 375,
              unitPrecision: 6,
              propList: ["*"],
              viewportUnit: "vw",
              fontViewportUnit: "vw",
              selectorBlackList: [],
              minPixelValue: 1,
              mediaQuery: true,
              exclude: [],
              landscape: false
            })
          ]}
      }
    }
  }
})
