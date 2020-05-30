<template>
  <div id="overlay" @click="clickEvent">
      <div id="content" @click="stopEvent">
        <div class="deleteLow">
          <h1>Find Mask</h1>
          <a class="delete is-medium" @click="clickEvent"></a>
        </div>
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

<style lang="scss" scoped>
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
.deleteLow{
  display: flex;
  justify-content: space-between;
}
</style>