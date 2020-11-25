<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.list" :key="index" :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
export default {
name: "DetailGoodsInfo",
  props:{
    detailInfo:{
      type:Object,
      default(){
        return{}
      }
    },
  },
  data(){
    return {
      counter:0,
      imagesLenght:0
    }
  },
  methods:{
    imgLoad(){
      // 节流操作
      if(++this.counter === this.imagesLenght){
        this.$emit('imageLoad');
      }
    }
  },
  watch:{
    detailInfo(){
      this.imagesLenght = this.detailInfo.list.length
    }
  }
}
</script>

<style scoped>
.goods-info{
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
  padding: 0 15px;
}
.goods-info .start,.goods-info .end{
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.goods-info .start{
  float: left;
}
.goods-info .end{
  float: right;
}
.goods-info .start::before,.goods-info .end::after{
  position: absolute;
  content: '';
  width: 5px;
  height: 5px;
  background: #333;
  bottom: 0;
}
.goods-info .end::after{
  right: 0;
}
.info-desc .desc{
  padding: 15px 0;
}
.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}
.info-list img {
  width: 100%;
}
</style>
