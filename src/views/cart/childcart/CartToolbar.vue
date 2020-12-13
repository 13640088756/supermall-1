<template>
  <div class="cart-toolbar">
<!--    全选按钮-->
    <div class="toolbar-all" >
      <cart-click-but class="btn-right" :is-checked="isSelectAll" @click.native="clickChecked"/>
      <span>全选</span>
    </div>
<!--    合计-->
    <div class="price">合计:{{toolbarPrice}}</div>
    <div class="total" @click="toolbar">结算({{totalCount}})</div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import CartClickBut from "@/components/content/CartBut/CartClickBut";
export default {
name: "CartToolbar",
  components:{
  CartClickBut,
  },
  computed:{
    ...mapGetters(['cartList']),
    toolbarPrice(){
      const add = [];
      for(let item of this.cartList){
        if(item.checked){
          add.push(item.Price * item.count)
        }
      }
      return `￥${add.reduce((acc,cur)=> {
        return acc + cur
      },0).toFixed(2)}`
    },
    // 合计
    totalCount(){
     return this.cartList.filter(item => item.checked).length
    },
    // isSelectAll 为turn时，全部checked= trun ，全选中
    isSelectAll(){
      if (this.cartList.length === 0) return false
      //方法一
      // return !this.cartList.find((item) => {return !item.checked})
      // 方法二
      for (let i=0;i<this.cartList.length;i++){
        if(!this.cartList[i].checked){
          return false
        }
      }
      return true
    }
  },
  methods:{
    clickChecked(){
      if (this.isSelectAll){
        this.cartList.forEach(item => item.checked = false)
      }else {
        this.cartList.forEach(item => item.checked = true)
      }
    },
    toolbar(){
      if (!this.isSelectAll){
        this.$toast.showToast('购物车为空',1000)
      }
    }
  }
}
</script>

<style scoped>
/*全选按钮*/
.cart-toolbar{
  display: flex;
  align-items: center;
  height: 40px;
  line-height: 40px;
  background: #fff;
}
.cart-toolbar .toolbar-all{
  width: 60px;
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.btn-right{
  margin-right: 5px;
}
/*合计*/
.cart-toolbar .price{
  flex: 1;
  margin-left: 30px;
}
.total{
  width: 70px;
  text-align: center;
  color: #fff;
  background: var(--color-high-text);
}
</style>
