<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link"><img :src="item.image" alt="" @load="SwiperImagesLoad"></a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper";
export default {
name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      sw:false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    SwiperImagesLoad(){
      if (!this.sw){
        this.$emit('SwiperImagesLoad')
        this.sw=true
      }
    }
  }
}
</script>

<style scoped>

</style>
