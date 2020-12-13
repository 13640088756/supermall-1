import Vue from 'vue'
import App from './App.vue'
import router from "@/router"
import store from "@/store"
import FastClick from "fastclick"
import toast from "components/common/toast"
Vue.config.productionTip = false
//解决移动端 300ms延迟
FastClick.attach(document.body);
// vue -lazyload
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload,{
  loading: require('./assets/img/common/placeholder.png')
})
//vue实例作为事件总线
Vue.prototype.$bus = new Vue()
// 插件方式的封装
Vue.use(toast)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
