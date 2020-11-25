<template>
  <div id="detail">
    <detail-nav-ber @navClick="navClick" ref="nav"></detail-nav-ber>
    <scroll class="content" ref="back" :probe-type="2" @ContentPosition="ContentPosition">
      <detail-swiper :banners="topImages" @itemimages="itemimages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" ref="param"/>
      <detail-param :paramInfo="goodsParams" />
      <detail-comment :commentInfo="commentInfo" ref="comment"/>
      <goods-list :goodslist="recommend" ref="recommend"/>
    </scroll>
    <detail-bottom-bar/>
  </div>
</template>

<script>
import DetailNavBer from "@/views/detail/childcomponents/DetailNavBer";
/*scroll*/
import scroll from "@/components/common/scroll/scroll";
import GoodsList from "@/components/content/goodslist/GoodsList";
// 网络
import {getDetail,Goods,Shop,detailInfo,GoodsParam,getRecommend} from "@/network/detail";
import DetailSwiper from "@/views/detail/childcomponents/DetailSwiper";
import DetailBaseInfo from "@/views/detail/childcomponents/DetailBaseInfo";
import DetailShopInfo from "@/views/detail/childcomponents/DetailShopInfo";
import DetailGoodsInfo from "@/views/detail/childcomponents/DetailGoodsInfo";
import DetailParam from "@/views/detail/childcomponents/DetailParam";
import DetailComment from "@/views/detail/childcomponents/DetailComment";
import DetailBottomBar from "@/views/detail/childcomponents/DetailBottomBar";
import {itemListMixin} from "@/common/mixin";
export default {
name: "Detail",
  components: {
    DetailNavBer,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    scroll,
    DetailGoodsInfo,
    DetailParam,
    DetailComment,
    GoodsList,
    DetailBottomBar
  },
  data(){
    return{
      iid:null,
      topImages:[],
      goods:{},
      shop:{},
      detailInfo:{},
      goodsParams:{},
      commentInfo:{},
      recommend:[],
      themeTop:[0,1000,2000,3000],
      currentIndex:0
    }
  },
  mixins:[itemListMixin],
  methods:{
    // 刷新scroll高度
    itemimages(){
      this.$refs.back.refresh()
    },
    imageLoad(){
      this.$refs.back.refresh()
      // 图片加载完成时，获取到元素的真实高度
      this.themeTop=[]
      this.themeTop.push(0)
      this.themeTop.push(this.$refs.param.$el.offsetTop)
      this.themeTop.push(this.$refs.comment.$el.offsetTop)
      this.themeTop.push(this.$refs.recommend.$el.offsetTop)
      // 加一个最大值
      this.themeTop.push(Number.MAX_VALUE)

      console.log(this.themeTop)
    },
    navClick(index){
      console.log(index);
      this.$refs.back.ScrollTo(0,-this.themeTop[index],100)
    },
    // 监听滚动
    ContentPosition(position){
      const positionY=-position.y
      // position.y 在 0- 790 之间 index为0
      // position.y 在 =790-7116 之间 index为1
      // position.y 在 =7116- 7332 之间 index为2
      // position.y 大于=7332 index为3
      const length = this.themeTop.length
      /*
      普通方法
      * */
      /*for (let i=0; i<length; i++){
        if(this.currentIndex !== i && ((i < length-1 && positionY >= this.themeTop[i] && positionY < this.themeTop[i+1]) ||
          (i === length-1 && positionY >= this.themeTop[i]))){
          console.log(i)
          this.$refs.nav.currentIndex = this.currentIndex = i
        }
      }*/
      /*hack方法*/
      //4
      for(let i=0; i<length-1; i++){
        if(this.currentIndex !==i && (positionY >= this.themeTop[i] && positionY < this.themeTop[i+1])){
          this.$refs.nav.currentIndex = this.currentIndex = i
        }
      }
    }
  },

  created(){
    this.iid = this.$route.params.id
    /*
    网络请求
    */
    getDetail(this.iid).then(res=>{
      console.log(res);
      const data = res.data.result
      // 1.获取顶部图片数据
      this.topImages = data.itemInfo.topImages
      // 2 获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      //3. 获取店铺信息
      this.shop = new Shop(data.shopInfo)
      //4.获取商品信息 desc images
      this.detailInfo = new detailInfo(res.data.result.detailInfo)
      //5,商品参数信息
      this.goodsParams = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      //获取评论信息
      if (data.rate.CRate !== 0){
        this.commentInfo = data.rate.list[0]
      }
    })

    getRecommend().then(res=>{
      this.recommend = res.data.data.list
    })
  },
  mounted(){

  },
  destroyed() {
  this.$bus.$off('itemImagesload',()=>{
    refresh()
  })
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background: #fff;
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 49px);
}
</style>
