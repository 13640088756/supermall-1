<template>
  <div class="goods-list-item" @click="itemClick">
    <div>
      <img v-lazy="showImage" alt="" @load="itemImagesload">
     <div class="goods-info">
       <p>{{goodsitem.title}}</p>
       <span class="price">{{goodsitem.price}}</span>
       <span class="collect">{{goodsitem.cfav}}</span>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
name: "GoodsListItem",
  methods:{
    itemImagesload(){
      this.$bus.$emit('itemImagesload')
    },
    itemClick(){
      this.$router.push('/detail/'+this.goodsitem.iid)
      console.log(this.goodsitem.iid);
    }
  },
  computed:{
    showImage(){
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }

}
</script>

<style scoped>
.goods-list-item{
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}
.goods-list-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
