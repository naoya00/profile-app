<template>
  <div id="overlay" @click="clickEvent">
      <div id="content" @click="stopEvent">
        <div class="contentLow">
          <h1 class="contentLow__title">Spreadsheet-App</h1>
          <a class="delete is-medium" @click="clickEvent"></a>
        </div>
        <div class="contentLow__texts">
          前職で働いていた、職場の集計表をモデルに作成させて頂きました。
          <br>
          電卓でその都度、指名率などを計算していたのでそちらの効率化を意識しました。
          <br>
          また、メニューなどの追加などがあった場合に対応するために効率的なコーディングを意識しました。
        </div>
        <div class="contentLow__icons">
          <a href="https://spreadsheet-app.netlify.app/" target=”_blank”>
            <font-awesome-icon icon="link" />
          </a>
          <a href="https://github.com/naoya00/gray-counter" target="_blank">
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
      this.$emit('spreadsheetFrom-child')
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