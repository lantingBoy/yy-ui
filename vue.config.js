const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false, // 生产环境是否开启sourceMap
  lintOnSave: false,// 去掉eslint校验
})
