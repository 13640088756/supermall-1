import {ADD_COUNT,NEW_CART} from "@/store/mutation-type";
export default {
  addCart(context,payload){
    let oldproduct =context.state.cartList.find(item => item.iid === payload.iid)
    if (oldproduct){
      context.commit(ADD_COUNT,oldproduct)
    }else{
      context.commit(NEW_CART,payload)
      payload.count = 1
    }
  }
}
