// import Vue from 'vue'
// import Vuex from 'vuex'
// import moduleCart from './cart.js'
// // 导入用户的 vuex 模块
// import moduleUser from './user.js'

// Vue.use(Vuex)

// // 3. 创建 Store 的实例对象
// const store = new Vuex.Store({
// 	modules: {
// 		'm_cart': moduleCart,
// 		// 挂载用户的 vuex 模块，访问路径为 m_user
// 		'm_user': moduleUser,
// 	},
	
// })
// // 4. 向外共享 Store 的实例对象
// export default store

import { createStore } from "vuex";
import moduleCart from './cart.js'
// 导入用户的 vuex 模块
import moduleUser from './user.js'
const store = createStore({
  modules: {
  'm_cart': moduleCart,
  // 挂载用户的 vuex 模块，访问路径为 m_user
  'm_user': moduleUser,
  },
});
export default store;