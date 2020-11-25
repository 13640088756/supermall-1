<template>
  <div id="home">
    <nav-ber class="nav-bar"><div slot="center">购物街</div></nav-ber>
    <tab-control :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" ref="tabControl2" v-show="isShowTap"/>
   <scroll class="content" ref="back" :probeType="3" @ContentPosition="ContentPosition" :pullUpLoad="true" @pullingUp="pullingUp">
     <home-swiper :banners="banners" @SwiperImagesLoad="SwiperImagesLoad"/>
     <RecommendViews :recommends="recommends"/>
     <feature-view/>
     <tab-control :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" ref="tabControl"/>
     <goods-list :goodslist="goods[currentType].list"/>
   </scroll>
    <back-top @click.native="BackClick" v-show="isShow"></back-top>
  </div>
</template>

<script>

import NavBer from "@/components/common/nav-ber/NavBer";
import TabControl from "@/components/content/tabControl/TabControl";

import HomeSwiper from "@/views/home/childcomponents/HomeSwiper";
import RecommendViews from "./childcomponents/RecommendViews";
import FeatureView from "@/views/home/childcomponents/featureView";
import GoodsList from "@/components/content/goodslist/GoodsList";
import GoodsListItem from "@/components/content/goodslist/GoodsListItem";
import scroll from "@/components/common/scroll/scroll";
import BackTop from "@/components/content/BackTop/BackTop";

import {getHomeMultidata,getHomeGoods} from "@/network/home";
//常用工具
import {debounce} from "@/common/utils";
import {itemListMixin} from "@/common/mixin";

export default {
name: "home",
  data(){
    return{
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0, list:[]},
        'new':{page:0, list:[]},
        'sell':{page:0, list:[]},
      },
      currentType:'pop',
      isShow:false,
      isShowTap:false,
      TabControlOffsetTop:0,
      saveY:0
    }
  },
  mixins:[itemListMixin],
  components:{
    NavBer,
    TabControl,
    HomeSwiper,
    RecommendViews,
    FeatureView,
    GoodsList,
    GoodsListItem,
    scroll,
    BackTop
  },
  methods:{
  /*
  * 事件监听相关方法
  * */
    tabClick(index){
    switch (index) {
      case 0:
        this.currentType='pop'
          break
      case 1:
        this.currentType='new'
          break
      case 2:
        this.currentType='sell'
          break
    }
    /*同步当前index,item*/
    this.$refs.tabControl.currentIndex=index;
    this.$refs.tabControl2.currentIndex=index;
  },
    BackClick() {
      this.$refs.back.ScrollTo(0, 0)
    },
    ContentPosition(position){
      // console.log(position.y)
      this.isShow = (-position.y) > 1000 ? true : false





      this.isShowTap = (-position.y) > this.TabControlOffsetTop
    },
    pullingUp(){
      this.getHomeGoods(this.currentType)
    },

    SwiperImagesLoad(){
      //tabControl offsetTop高度
      this.TabControlOffsetTop=this.$refs.tabControl.$el.offsetTop
    },
    /*
    网络请求封装的函数
    */
    getHomeMultidata(){
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
    },
    getHomeGoods(type){
      const page = this.goods[type].page+1;
      getHomeGoods(type,page).then(res =>{
        console.log(res)
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page+=1
        //数据请求完成之后放行下次下拉
        this.$refs.back.finishPullUp()
      })
    },
    go(){
      this.$router.go(0)
    }
  },
  /*生命周期函数*/
  created(){
  this.getHomeMultidata();
  this.getHomeGoods('pop');
  this.getHomeGoods('new');
  this.getHomeGoods('sell');
  },
  /*组件加载完成之后..*/
  mounted(){

  },

  destroyed() {
    console.log('111');
  },
  /*被 keep-alive 缓存的组件停用时调用*/
  activated() {
    this.$refs.back.refresh()
    this.$refs.back.ScrollTo(0,this.saveY,0)
  },
  deactivated() {
    this.saveY=this.$refs.back.getScrollY()
    this.$bus.$off('itemImagesload',()=>{
      refresh()
    })
    // console.log(this.$refs.back.scroll.y);
  }
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.nav-bar{
  color: #fff;
  background: var(--color-tint);
}
.tab-control{
  position: relative;
  z-index: 9;
}
.content{
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
