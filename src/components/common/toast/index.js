import Toast from "./toast.vue";
const obj={}
obj.install = function (Vue){
  // 1.创建组件构造器
   const toastConstr = Vue.extend(Toast);
   // 2. new实例化
  const toast = new toastConstr;
  // 挂载 dom 上
  toast.$mount(document.createElement('div'));
  // 将挂载再dom上的元素，添加至页面
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}
export default obj
