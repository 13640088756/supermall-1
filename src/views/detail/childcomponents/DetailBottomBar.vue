<template>
  <div class="bottom-ber">
    <div class="bar-item bar-left">
      <div>
        <i></i>
        <sapn></sapn>
      </div>
    </div>
    <div class="bar-item bar-right"></div>
  </div>
</template>

<script>
export default {
name: "DetailBottomBar"
}
</script>

<style scoped>
.bottom-ber{
  display: flex;
  position: relative;
  height: 49px;
  /*bottom: 49px;*/
  background: #ffffff;

}
.bottom-ber .bar-item{
  flex: 1;
}
.bar-left{
  background: #333333;
}
</style>
