<template>
  <div class="cart-toolbar">
<!--    全选按钮-->
    <div class="toolbar-all">
      <cart-click-but class="btn-right"/>
      <span>全选</span>
    </div>
<!--    合计-->
    <div class="price">合计:{{toolbarPrice}}</div>
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
      const add=[]
      for(let item of this.cartList){
        if(item.checked){
          add.push(item.Price * item.count)
        }
      }
      return `￥${add.reduce((acc,cur)=> acc + cur).toFixed(2)}`
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
  background: #ccc;
}
.cart-toolbar .toolbar-all{
  display: flex;
  align-items: center;
  margin-left: 5px;
}
.btn-right{
  margin-right: 5px;
}
/*合计*/
.cart-toolbar .price{
  margin-left: 30px;
}
</style>
