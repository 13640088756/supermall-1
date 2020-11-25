<template>
  <div class="shop-info">
<!--    top-->
   <div class="shop-top">
     <img :src="shop.logo" alt="">
     <span class="title">{{shop.name}}</span>
   </div>
<!--    middle-->
    <div class="shop-middle">
      <!--      left-->
      <div class="shop-middle-item shop-middle-left">
<!--        总销量-->
        <div class="info-sells">
            <div class="sells-count">
              {{shop.sells | sellCountFilter}}
            </div>
          <div class="sells-text">总销量</div>
        </div>
<!--        全部宝贝-->
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <!--      right-->
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
<!--    bottom-->
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
name: "DetailShopInfo",
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
 /* 过滤器*/
  filters:{
    sellCountFilter(value){
      if(value <10000) return value
      return (value/10000).toFixed(1) +'万'
    }
  }
}
</script>

<style scoped>
/*top部分*/
.shop-info{
  padding: 28px 8px;
  border: 5px solid #f2f5f8;
}
.shop-top{
  display: flex;
  align-items: center;
}
.shop-top img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.1);
}
.shop-top .title{
  margin-left: 10px;
}
/*middle部分*/
.shop-middle{
  display: flex;
  margin-top: 15px;
  align-items: center;
}
.shop-middle-item{
  flex: 1;
}
.shop-middle-left{
  display: flex;
  color: #333;
  justify-content: space-evenly;
  text-align: center;
  border-right: 1px solid rgba(0,0,0,.1);
}
.sells-count, .goods-count {
  font-size: 18px;
}
.sells-text, .goods-text {
  margin-top: 10px;
  font-size: 12px;
}
.shop-middle-right .score{
  color: #5ea732;
}
.shop-middle-right .score-better{
  color: #f13e3a;
}
.shop-middle-right .better span{
  background: #5ea732;
  color: #fff;
  text-align: center;
}
.shop-middle-right .better-more span{
  background: #f13e3a;
}
/*调整表格*/
.shop-middle-right {
  font-size: 13px;
  color: #333;
}
.shop-middle-right table {
  width: 120px;
  margin-left: 30px;
}

.shop-middle-right table td {
  padding: 5px 0;
}

/*bottom部分*/
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>
