import {ADD_COUNT,NEW_CART} from "@/store/mutation-type";
export default {
  addCart(context,payload){
    return new Promise((resolve, reject)=>{
      let oldproduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldproduct){
        context.commit(ADD_COUNT,oldproduct)
        resolve('商品数量+1')
      }else{
        // !!!必须先让count =1 ，再进行提交！！ 否则 数据无法正确渲染
        context.commit(NEW_CART,payload)
        resolve('加入购物车成功')
      }
    })
  }
}
