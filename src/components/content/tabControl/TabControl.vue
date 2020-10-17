<template>
<div class="tab-control">
  <div v-for="(item,index) in title" class="tab-item"
       :class="{active: currentIndex===index}"
       @click="ItemClick(index)">
    <span>{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
  name: "TabControl",
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
   return{
     currentIndex:0
    }
  },
  methods:{
    ItemClick(index){
      this.currentIndex=index
      this.$emit('tabClick',index)
    },
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #fff;
}
.tab-item{
  flex: 1;
}
.tab-item span{
  padding: 4px;
}
.active{
  color: var(--color-high-text);

}
.active span{
  border-bottom: 2px solid var(--color-tint);
}
</style>
