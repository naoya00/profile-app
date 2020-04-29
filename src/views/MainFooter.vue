<template>
  <div class="footerLow">
    <router-link to="/" class="footerLink">Top</router-link>
    <router-link to="/about" class="footerLink">About</router-link>
    <router-link to="/production" class="footerLink">Production</router-link>
    <router-link to="/production" class="footerLink">Contact</router-link>
    <div class="footerLow__icons">
      <a href="https://twitter.com/Ig6gRbnU9W8c7EB" target=”_blank”>
        <font-awesome-icon :icon='["fab", "twitter"]' />
      </a>
      <a href="https://github.com/naoya00" target=”_blank”>
        <font-awesome-icon :icon='["fab", "github"]' />
      </a>
    </div>
    <div class="footerLow__C">
      ©2018 Naoaya Ishizaka
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footerLow{
  text-align: center;
  & .footerLink{
     margin-right: 30px;
    text-decoration: none;
    font-size: 16px;
    color: #808080;
    &:hover{
      color: #000;
      text-decoration: underline;
    }
  }
  &__icons{
    font-size: 40px;
    & .fa-twitter,.fa-github{
      margin: 20px 30px 0 0;
      color: #808080;
      &:hover{
        color: #000;
      }
    }
  }
  &__C{
    color: #808080;
    font-size: 0.8em;
  }
}
</style>