<template>
<div class="nav-ber">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
name: "NavBer"
}
</script>

<style scoped>
.nav-ber{
  display: flex;
  height: 44px;
  line-height: 44px;
}
.left,.right{
  width: 60px;
}
.center{
  flex: 1;
  text-align: center;
}

</style>
