<template>
  <div class="goods-list">
    <goods-listitem v-for="item in goodslist" :goodsitem="item"/>
  </div>
</template>

<script>
import GoodsListitem from 'components/content/goodslist/GoodsListItem'
export default {
name: "GoodsList",
  props:{
    goodslist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListitem
  }
}
</script>

<style scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
