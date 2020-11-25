<template>
  <nav-ber class="nav-ber">
    <div slot="left" class="left" @click="getBack"><img src="~assets/img/common/back.svg" alt=""></div>
    <div slot="center" class="detail">
      <div v-for="(item,index) in titles" class="detailitem"
           :class="{active: currentIndex === index}"
           @click="itemClick(index)">{{item}}
      </div>
    </div>
  </nav-ber>
</template>

<script>
import NavBer from "@/components/common/nav-ber/NavBer";
export default {
name: "DetailNavBer",
  data(){
    return{
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBer,
  },
  methods:{
    itemClick(index){
      this.currentIndex = index
      this.$emit('navClick',index)
    },
    getBack(){
      this.$router.back()
    }
  }

}
</script>

<style scoped>
.detail{
  display: flex;
  font-size: 15px;
}
.detailitem{
  flex: 1;
}
.left{
  text-align: center;

}
.left img{
  margin-top: 10px;
}
.active{
  color: var(--color-high-text);
}
.nav-ber{
  position: relative;
  z-index: 9;
  background: #ffffff;
}
</style>
