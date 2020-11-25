import {debounce} from "@/common/utils";

export const itemListMixin ={
  mounted(){
    this.$refs.back.refresh()
    //加载dom监听图片加载  debounce封装的防抖函数
    const refresh= debounce(this.$refs.back.refresh,500)
    //事件总线
    this.$bus.$on('itemImagesload',()=>{
      refresh()
    })
  }
}
