<template>
  <div class="appLow">
    <header>
      <router-link to="/" class="link">Top</router-link>
      <router-link to="/about" class="link">About</router-link>
      <router-link to="/production" class="link">Production</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

.appLow{
  width: 95%;
  margin: auto;
  padding-top: 30px;
  & .link{
    margin-right: 30px;
    text-decoration: none;
    font-size: 20px;
    color: #808080;
    &:hover{
      color: #000;
    }
  }
}

</style>