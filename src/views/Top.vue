<template>
  <div class="topLow">
    <div class="topLow__texts">
      Naoya's<br>
      PortFolio<br>
      Site<br>
      <div class="topLow__texts--swiches">
        <div v-if="show===true">Face switch off</div>
        <div v-else>Face switch on</div>
        <button @click="show = !show" class="topLow__button">push</button>
      </div>
    </div>
    <transition enter-active-class="animated flip" leave-active-class="animated zoomOutRight" appear>
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
    width: 40px;
    height: 40px;
    margin: auto;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    background: #FFF;
	background: -moz-linear-gradient(top,#FFF 0%,#DDD);
	background: -webkit-gradient(linear, left top, left bottom, from(#FFF), to(#DDD));
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
    text-shadow: -1px -1px rgba(255, 255, 255, 0.44), 1px 1px rgba(0, 0, 0, 0.38);
    color: #808080;
    transition: .3s;
    &:hover{
      opacity: 0.7;
      box-shadow: none;
    }
    &:active {
      -webkit-transform: translateY(2px);
      transform: translateY(2px);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
      border-bottom: none;
    }
  }
}
</style>
