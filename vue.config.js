const { defineConfig } = require('@vue/cli-service')

const autoprefixer = require('autoprefixer');
const pxtoviewport = require('postcss-px-to-viewport-8-plugin');
const pagesConfig = require("./page.config.js");


module.exports = defineConfig({
  transpileDependencies: true,
  pages: pagesConfig,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {plugins:[
            autoprefixer(),
            pxtoviewport({
              viewportWidth: 375
            })
          ]}
      }
    }
  }
})
