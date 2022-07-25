const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false, // 生产环境是否开启sourceMap
  lintOnSave: false,// 去掉eslint校验
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 强制内联CSS
  css: {
    extract: false
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './examples')
        // 'vue$': path.resolve(__dirname, './node_modules/vue/dist/vue.runtime.esm.js')
      },
      fallback:{ "path": require.resolve("path-browserify") }
    }
  },
})
