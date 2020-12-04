<template>
  <div class="cart">
    <nav-ber class="bg"><div slot="center">购物车({{cartLength}})</div></nav-ber>
    <cart-list/>
    <cart-toolbar/>
  </div>
</template>

<script>

import {mapGetters} from "vuex"
import NavBer from "@/components/common/nav-ber/NavBer";
import CartList from "@/views/cart/childcart/CartList";
import CartToolbar from "@/views/cart/childcart/CartToolbar";
import Scroll from "@/components/common/scroll/scroll";
export default {
  name: "Cart",
  components:{
    NavBer,
    CartList,
    CartToolbar,
  },
  computed:{
    ...mapGetters(['cartLength'])
  }
}
</script>

<style scoped>
.bg{
background: var(--color-tint);
  color: #fff;
}
.cart{
  height: 100vh;
}
</style>
