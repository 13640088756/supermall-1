import Vue from 'vue'
import Vuex from 'vuex'
// 模块
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";
Vue.use(Vuex)
const state={
  cartList:[]
}
const store = new Vuex.Store({
  getters,
  state,
  //mutations的唯一目的就是改变state的值
  //mutations中的方法尽可能的只完成比较单一的一点
  mutations,
  actions,
})
export default store
