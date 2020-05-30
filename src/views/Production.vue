<template>
  <div class="productionLow">
    <h3>作ったもの</h3>
    <a @click="openModal">
      <div class="productionLow__content">
        <img src="@/assets/findmask.jpg" />
        <div class="productionLow__content--texts">
          <h2>
            Find Mask
          </h2>
            <span>人類を救う、マスク在庫検索アプリです。最寄りの駅で、マスク在庫がある店舗を検索することができます。</span>
        </div>
      </div>
    </a>
    <a @click="furimaOpenModal">
      <div class="productionLow__content">
        <img src="@/assets/furima.jpg" />
        <div class="productionLow__content--texts">
          <h2>
            Furima
          </h2>
            <span>プログラミングスクールでチーム開発をした、フリーマーケットアプリです。実際に商品出品や商品購入ができます。</span>
            <h5> ID: admin<br>Pass: 2222</h5>
        </div>
      </div>
    </a>
    <a @click="profileOpenModal">
      <div class="productionLow__content">
        <img src="@/assets/portforio.jpg" />
        <div class="productionLow__content--texts">
          <h2>
            ポートフォリオサイト
          </h2>
            <span>本サイトです。石坂直也という人物をよく知って頂きたく作成致しました。Vue.jsの理解を深めるためでもあります。</span>
        </div>
      </div>
    </a>
    <FindMaskModal v-show="showContent" @from-child="closeModal"></FindMaskModal>
    <FurimaModal v-show="furimaShowContent" @FurimaFrom-child="furimaCloseModal"></FurimaModal>
  </div>
</template>

<script>
export default {
  data: function(){
  return{
    showContent: false,
    furimaShowContent: false
    }
  },
  methods:{
    openModal: function(){
      this.showContent = true
    },
    closeModal: function(){
      this.showContent = false
    },
    furimaOpenModal: function(){
      this.furimaShowContent = true
    },
    furimaCloseModal: function(){
      this.furimaShowContent = false
    }
  }
}
</script>

<style lang="scss" scoped>
.productionLow{
  width: 80%;
  margin: 50px auto;
  & a{
    text-decoration: none;
  }
  & h3{
    font-size: 2em;
    color: #808080;
    margin-bottom: 20px
  }
  &__content{
    background-color:#eeeeee;
    box-shadow: 0 3px 6px black;
    padding: 25px;
    display: flex;
    transition: 0.5s;
    margin-bottom: 50px;
    & img{
      height: 250px;
      margin-right: 100px;
    }
    &--texts{
      color: #808080;
    }
    &:hover{
      opacity: 0.8;
    }
  }
}
</style>