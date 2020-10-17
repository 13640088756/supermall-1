<template>
  <div id="home">
    <nav-ber class="nav-bar"><div slot="center">购物街</div></nav-ber>
    <home-swiper :banners="banners"/>
    <RecommendViews :recommends="recommends"/>
    <feature-view/>
    <tab-control :title="['流行','新款','精选']" class="tab-control" @tabClick="tabClick"/>
    <goods-list :goodslist="goods[currentType].list"/>
    <ul>
      <li>1列表</li>
      <li>2列表</li>
      <li>3列表</li>
      <li>4列表</li>
      <li>5列表</li>
      <li>6列表</li>
      <li>7列表</li>
      <li>8列表</li>
      <li>9列表</li>
      <li>10列表</li>
      <li>11列表</li>
      <li>12列表</li>
      <li>13列表</li>
      <li>14列表</li>
      <li>15列表</li>
      <li>16列表</li>
      <li>17列表</li>
      <li>18列表</li>
      <li>19列表</li>
      <li>20列表</li>
      <li>1列表</li>
      <li>2列表</li>
      <li>3列表</li>
      <li>4列表</li>
      <li>5列表</li>
      <li>6列表</li>
      <li>7列表</li>
      <li>8列表</li>
      <li>9列表</li>
      <li>10列表</li>
      <li>11列表</li>
      <li>12列表</li>
      <li>13列表</li>
      <li>14列表</li>
      <li>15列表</li>
      <li>16列表</li>
      <li>17列表</li>
      <li>18列表</li>
      <li>19列表</li>
      <li>20列表</li>
      <li>1列表</li>
      <li>2列表</li>
      <li>3列表</li>
      <li>4列表</li>
      <li>5列表</li>
      <li>6列表</li>
      <li>7列表</li>
      <li>8列表</li>
      <li>9列表</li>
      <li>10列表</li>
      <li>11列表</li>
      <li>12列表</li>
      <li>13列表</li>
      <li>14列表</li>
      <li>15列表</li>
      <li>16列表</li>
      <li>17列表</li>
      <li>18列表</li>
      <li>19列表</li>
      <li>20列表</li>
      <li>1列表</li>
      <li>2列表</li>
      <li>3列表</li>
      <li>4列表</li>
      <li>5列表</li>
      <li>6列表</li>
      <li>7列表</li>
      <li>8列表</li>
      <li>9列表</li>
      <li>10列表</li>
      <li>11列表</li>
      <li>12列表</li>
      <li>13列表</li>
      <li>14列表</li>
      <li>15列表</li>
      <li>16列表</li>
      <li>17列表</li>
      <li>18列表</li>
      <li>19列表</li>
      <li>20列表</li>
    </ul>
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

import {getHomeMultidata,getHomeGoods} from "@/network/home";






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
      currentType:'pop'
    }
  },
  components:{
    NavBer,
    TabControl,
    HomeSwiper,
    RecommendViews,
    FeatureView,
    GoodsList,
    GoodsListItem
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
      })

    }
  },
  created(){
  this.getHomeMultidata();
  this.getHomeGoods('pop');
  this.getHomeGoods('new');
  this.getHomeGoods('sell');
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.nav-bar{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  color: #fff;
  background: var(--color-tint);
}
.tab-control{
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
