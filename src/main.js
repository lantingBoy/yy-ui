import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import Router from './router'
import 'element-ui/lib/theme-chalk/index.css';

import Vui from 'yy-vui'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vui)
Vue.use(Router)

new Vue({
  render: h => h(App),
}).$mount('#app')
