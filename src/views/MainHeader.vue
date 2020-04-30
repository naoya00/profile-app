<template>
  <div class="headerLow">
    <header>
      <router-link to="/" class="link">Top</router-link>
      <router-link to="/about" class="link">About</router-link>
      <router-link to="/production" class="link">Production</router-link>
      <a href="https://twitter.com/Ig6gRbnU9W8c7EB" target=”_blank” class="link">Contact</a>
    </header>
  </div>
</template>


<style lang="scss" scoped>
.headerLow{
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