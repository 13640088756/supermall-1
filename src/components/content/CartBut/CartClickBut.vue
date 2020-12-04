<template>
  <div class="cart-but" :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
name: "CartClickBut",
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>

<style scoped>
.cart-but{
  width: 20px;
  height: 20px;
  border-radius:50% ;

  border:2px solid #f13e3a;
  overflow: hidden;
}
.check{
  background: #eb4868;
}
</style>
