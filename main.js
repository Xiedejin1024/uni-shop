
// #ifndef VUE3
console.log('不是vue3环境 - 执行代码块')
import Vue from 'vue'
import App from './App'
// 1. 导入 store 的实例对象
import store from './store/store.js'

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	// 2. 将 store 挂载到 Vue 实例上
	store,
})
app.$mount()
// #endif

// #ifdef VUE3
console.log('是vue3环境 - 执行代码块')
import { createSSRApp } from 'vue'
import App from './App.vue'
// 1. 导入 store 的实例对象
import store from './store/store.js'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app
  }
}
// #endif