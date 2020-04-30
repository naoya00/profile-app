<template>
  <div class="topLow">
    <div class="topLow__texts">
      Naoya's<br>
      PortFolio<br>
      Site
    </div>
    <transition enter-active-class="animated flip" appear>
      <img src="@/assets/profileImage.jpg" />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.topLow{
  height: 70vh;
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 50px auto;
  & img{
    height: 100%;
  }
  &__texts{
    font-family: Courgette,cursive;
    font-size: 60px;
    letter-spacing: 1px;
    color: #808080;
  }
}
</style>
