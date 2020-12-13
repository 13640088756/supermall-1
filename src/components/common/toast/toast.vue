<template>
  <div class="toast" v-show="showText">
    <div class="toast-text">{{message}}</div>
  </div>
</template>

<script>
export default {
name: "toast",
 data(){
  return{
    showText: false,
    message: '测试'

  }
 },
  methods:{
    showToast(message,time){
      time = time || 1000;
      this.showText = true;
      this.message = message;
      setTimeout(()=>{
        this.showText = false;
        this.message = ''
      },time)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: rgba(0,0,0,0.8);
  border-radius: 30px;
  padding: 10px 20px;
  color: #ffffff;
  font-weight: 500;
  z-index: 999;
}

</style>
