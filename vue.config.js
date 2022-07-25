const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false, // 生产环境是否开启sourceMap
  lintOnSave: false,// 去掉eslint校验
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
        // 'vue$': path.resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js')
      }
    }
  },
})
