<template>
  <div class="topLow">
    <div class="topLow__texts">
      Naoya's<br>
      PortFolio<br>
      Site<br>
      <div class="topLow__texts--swiches">
        <div v-if="show===true">Face switch off</div>
        <div v-else>Face switch on</div>
        <button @click="show = !show" class="button is-outlined topLow__button">push</button>
      </div>
    </div>
    <transition enter-active-class="animated zoomInRight" leave-active-class="animated zoomOutRight" appear>
      <img v-if="show" src="@/assets/profileImage.jpg" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
  return {
    show: true
  }
  }
}
</script>

<style lang="scss" scoped>
.topLow{
  height: 70vh;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 50px auto;
  position: relative;
  & img{
    height: 100%;
  }
  &__texts{
    font-family: Courgette,cursive;
    font-size: 60px;
    letter-spacing: 1px;
    color: #808080;
    &--swiches{
      display: flex;
      position: absolute;
      bottom: 10px;
      font-size: 30px;
      & :nth-child(1){
        margin-right: 50px;
      }
    }
  }
  &__button{
    font-family: Courgette,cursive;
  }
}
</style>
