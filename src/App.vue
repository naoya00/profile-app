<template>
  <div class="appLow">
    <router-view></router-view>
    <footer>

    </footer>
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