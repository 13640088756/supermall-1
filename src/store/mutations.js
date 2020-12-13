import {ADD_COUNT,NEW_CART} from "@/store/mutation-type";

export default {
  // addCart(state,payload){
  //   let oldproduct =null
  //   for ( let item of state.cartList){
  //     if (item.iid === payload.iid){
  //       oldproduct =item
  //     }
  //   }
  //   if(oldproduct){
  //     oldproduct.count +=1
  //   }else{
  //     this.state.cartList.push(payload)
  //     payload.count =1
  //   }
  // }
  /*
  已存在商品数量+1*/
  [ADD_COUNT](state,payload){
    payload.count +=1
  },
  // 新商品加入购物车
  [NEW_CART](state,payload){
    payload.count = 1
    payload.checked = true
    state.cartList.push(payload)
  }
}
