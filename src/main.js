import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Vui from 'yy-vui'
// import Vui from '../lib/index.umd.min'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vui)

new Vue({
  render: h => h(App),
}).$mount('#app')
