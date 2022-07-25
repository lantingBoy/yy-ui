import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'babel-polyfill'
// import Es6Promise from 'es6-promise'
// import './components/index.js' // 基础组件自动注册全局
import './assets/css/index.scss' // 全局样式
import './assets/css/iconfont/iconfont.css' // 字体图标样式
import './assets/css/fonts/fonts.css' // 文字字体
import Element from 'element-ui'
import '@/assets/css/element-variables.scss'

// import Vui from '../packages' // 二次封装组件
import Vui from '../lib/index.umd.min.js'
// console.log("🚀 ~ file: main.js ~ line 23 ~ Vui", Vui)
// import Vui from 'yy-vui'

Vue.use(Element)

Vue.use(Vui)

// import './permission' // 全局路由守卫
// 解决低版本浏览器不支持es6
// Es6Promise.polyfill()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
