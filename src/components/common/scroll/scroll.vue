<template>
   <div class="wrapper" ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
name: "scroll",
  props:{
    probeType:{
      type:Number,
      default(){
        return 0
      }
    },
    pullUpLoad:{
      type: Boolean,
      default:false
    },
  },
  data(){
    return{
      scroll:null
    }
  },
  // 初始化页面完成后 mounted
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      //probeType为 2 或3时监听滚动
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,

    })
    //监听滚动事件
    if(this.probeType === 2 || this.probeType === 3){
      this.scroll.on('scroll',(position)=>{
        // console.log(position)
        this.$emit('ContentPosition',position)
      })
    }
    //下拉加载更多
   if(this.pullUpLoad){
     this.scroll.on('pullingUp', ()=>{
       this.$emit('pullingUp')
     })
   }
  },
  methods:{
    ScrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    //
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
    getScrollY(){
     return this.scroll ? this.scroll.y : 0
    }
  }
}
</script>

<style scoped>

</style>
