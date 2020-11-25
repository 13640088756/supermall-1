<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in banners">
      <img :src="item" alt="" @load="itemimages">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
name: "DetailSwiper",
  data(){
    return{
      sw:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    itemimages(){
      if(!this.sw){
        this.$emit('itemimages')
        this.sw = true
      }
    },
  }
}
</script>

<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>
