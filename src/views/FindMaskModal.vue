<template>
<div id="overlay" @click="clickEvent">
    <div id="content" @click="stopEvent">
      <p>これがモーダルウィンドウです。</p>
      <button @click="clickEvent">Close</button>
    </div>
</div>
</template>

<script>
export default {
  methods :{
    clickEvent: function(){
      this.$emit('from-child')
    },
    stopEvent: function(){
      event.stopPropagation()
    }
  }
}
</script>

<style scoped>
#overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
#content{
  z-index:2;
  width:50%;
  padding: 1em;
  background:#fff;
}
</style>