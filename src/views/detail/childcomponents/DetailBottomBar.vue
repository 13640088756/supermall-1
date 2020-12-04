<template>
  <div class="bottom-ber">
    <div class="bar-item bar-left">
      <div>
        <i class="icon-size service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon-size shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon-size collect"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="car" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
name: "DetailBottomBar",
  methods:{
    addToCart(){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.bottom-ber{
  display: flex;
  position: relative;
  height: 49px;
  /*bottom: 49px;*/
  background: #ffffff;

}
.bottom-ber .bar-item{
  flex: 1;
}
.bar-left{
  display: flex;
}
.bar-left >div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.bar-left .icon-size{
  display: block;
  width: 22px;
  height: 22px;
  margin: 2px 0 2px ;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bar-left .shop{
  background-position: 0 -98px;
}
.bar-left .service{
  background-position: 0 -54px;
}
.bottom-ber .bar-right{
  display: flex;
  font-size: 14px;
  line-height: 49px;
  text-align: center;
  color: #fff;
}
.bar-right>div{
  flex: 1;
}
.bar-right .car{
  color: #000;
  background:#ffe817;
}
.bar-right .buy{
  background: #f69;
}
</style>
