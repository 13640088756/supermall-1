<template>
  <div class="cart-item">
   <div class="cart-but">
     <CartClickBut @click.native="itemChecked" :is-checked="itemInfo.checked"/>
   </div>
    <div class="cart-img">
      <img :src="itemInfo.images" alt="">
    </div>
    <div class="cart-info">
      <div class="info-title">{{itemInfo.title}}</div>
      <div class="info-desc">{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="info-price left">￥{{itemInfo.Price}}</div>
        <div class="info-count right">×{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CartClickBut from "@/components/content/CartBut/CartClickBut";
export default {
name: "CartListItem",
  props:{
    itemInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  components:{
    CartClickBut
  },
  methods:{
    itemChecked(){
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>

<style scoped>
.cart-item{
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.cart-but{
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-img{
  padding: 5px;
}
.cart-img img{
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.cart-info{
  position: relative;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
}
.info-title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info-desc{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cart-info .info-desc{
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom{
  position: absolute;
  bottom: 8px;
  left: 6px;
  right: 6px;
}
.info-bottom .info-price{
  color: var(--color-high-text);
}
</style>
