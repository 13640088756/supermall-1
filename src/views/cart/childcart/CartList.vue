<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :itemInfo="item" :key="index"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import scroll from "@/components/common/scroll/scroll";
import {mapGetters} from "vuex"
import CartListItem from "@/views/cart/childcart/CartListItem";
export default {
name: "CartList",
  computed:{
    ...mapGetters(['cartList'])
  },
  components:{
    CartListItem,
    scroll,
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list{
  height: calc(100% - 44px - 49px - 40px);
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>
