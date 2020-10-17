<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="Bar-item-icon"></slot></div>
    <div v-else><slot name="Bar-item-icon-active"></slot></div>
    <div :style="ActiveStyle"><slot name="Bar-item-name"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    // path地址
    link:{
      type:String
    },
    //字体颜色
    activeColor:{
      type:String,
      default:'red'
    }
  },
  name: "TabBarItem",
  data(){
    return{
    }
  },
  methods:{
    itemClick(){
      console.log(this.link)
      this.$router.replace(this.link)
    }
  },
  computed:{
    isActive(){
      //indexOf没有匹配到返回 -1 ,为false时活跃
      return this.$route.path.indexOf(this.link) !== -1
    },
    ActiveStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  height: 49px;
  text-align: center;
}
.tab-bar-item img{
  margin-top: 2px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
}

</style>
