<template>
  <div class="productionLow">
      <div class="productionLow__content">
        <div class="productionLow__content--explanation">
          <p>人類を救うマスク在庫検索アプリ【 Find Mask 】</p>
          <button class="button is-link is-inverted" @click="openModal">詳しく見る</button>
        </div>
        <img src="@/assets/findmask.jpg" />
      </div>
      <div class="productionLow__content">
        <div class="productionLow__content--explanation">
          <p>フリーマーケットアプリ【 Furima 】</p>
          <button class="button is-link is-inverted" @click="furimaOpenModal">詳しく見る</button>
        </div>
        <img src="@/assets/furima.jpg" />
      </div>
      <div class="productionLow__content">
        <div class="productionLow__content--explanation">
          <p>ポートフォリオサイト【 Naoya Ishizaka 】</p>
          <button class="button is-link is-inverted" @click="profileOpenModal">詳しく見る</button>
        </div>
        <img src="@/assets/portforio.jpg" />
      </div>
    <FindMaskModal v-show="showContent" @from-child="closeModal"></FindMaskModal>
    <FurimaModal v-show="furimaShowContent" @FurimaFrom-child="furimaCloseModal"></FurimaModal>
    <ProfileModal v-show="profileShowContent" @profileFrom-child="profileCloseModal"></ProfileModal>
  </div>
</template>

<script>
export default {
  data: function(){
  return{
    showContent: false,
    furimaShowContent: false,
    profileShowContent: false
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
    },
    profileOpenModal: function(){
      this.profileShowContent = true
    },
    profileCloseModal: function(){
      this.profileShowContent = false
    }
  }
}
</script>

<style lang="scss" scoped>
.productionLow{
  width: 75%;
  margin: 50px auto 70px;
  &__content{
    background-color:#eeeeee;
    box-shadow: 0 3px 6px black;
    padding: 25px;
    transition: 0.5s;
    margin-bottom: 50px;
    &--explanation{
      display: flex;
      justify-content: space-between;
      margin: 0 0 25px;
      & p{
        font-size: 30px;
        color: #808080;
      }
    }
  }
}
</style>