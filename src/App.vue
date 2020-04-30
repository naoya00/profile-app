<template>
  <div class="appLow">
    <MainHeader></MainHeader>
    <transition name="fade" appear>
      <router-view></router-view>
    </transition>
    <MainFooter></MainFooter>
  </div>
</template>

<style lang="scss" scoped>
.appLow{
  width: 95%;
  margin: auto;
  padding-top: 30px;

}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 1s;
}
.fade--enter-to{
  opacity: 1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
 transition: opacity 0s;
}
.fade-leave-to{
  opacity: 0;
}
</style>