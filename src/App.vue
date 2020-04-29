<template>
  <div class="appLow">
    <MainHeader></MainHeader>
    <router-view></router-view>
    <MainFooter></MainFooter>
  </div>
</template>

<style lang="scss" scoped>
.appLow{
  width: 95%;
  margin: auto;
  padding-top: 30px;
}
</style>