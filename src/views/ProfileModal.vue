<template>
  <div id="overlay" @click="clickEvent">
      <div id="content" @click="stopEvent">
        <div class="contentLow">
          <h1 class="contentLow__title">ProfileApp</h1>
          <a class="delete is-medium" @click="clickEvent"></a>
        </div>
        <div class="contentLow__texts">
          プログラミングスクールでチーム開発をした、フリーマーケットアプリです。
          <br>
          自分が担当した開発部分は、主に商品出品・編集機能のフロント・サーバーサイドです。
          <br>
          詳しくは下記のGithubのリンクからをご覧ください。
          <br>
          ID: admin
          <br>
          Pass: 2222
        </div>
        <div class="contentLow__icons">
          <a href="http://54.64.42.195/" target=”_blank”>
            <font-awesome-icon icon="link" />
          </a>
          <a href="https://github.com/rooreckless/freemarket_sample_71g" target="_blank">
            <font-awesome-icon :icon='["fab", "github"]' />
          </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods :{
    clickEvent: function(){
      this.$emit('profileFrom-child')
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
.contentLow{
  display: flex;
  justify-content: space-between;
  position: relative;
  &__title{
    font-size: 1.9em;
    color: #808080;
  }
  &__texts{
    margin: 30px 0;
  }
  &__icons{
    font-size: 30px;
    & .fa-link,.fa-github{
      margin-right:30px;
      color: #808080;
      &:hover{
        color: #000;
      }
    }
  }
}
</style>