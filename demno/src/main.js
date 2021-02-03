// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import './assets/reset.css'
// 引入公共组件
import Components from '../src/components/index'
import Fifits from '../src/fifits/index'
// 循环公共组件
for (let i in Components) {
  Vue.component(i, Components[i])
}
for (let i in Fifits) {
  Vue.component(i, Fifits[i])
}
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
// 引入store
import store from '../src/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
