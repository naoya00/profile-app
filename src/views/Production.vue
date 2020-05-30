<template>
  <div class="productionLow">
    <a @click="openModal">
      <div class="productionLow__content">
        <img src="@/assets/findmask.jpg" />
      </div>
    </a>
    <a @click="furimaOpenModal">
      <div class="productionLow__content">
        <img src="@/assets/furima.jpg" />
      </div>
    </a>
    <a @click="profileOpenModal">
      <div class="productionLow__content">
        <img src="@/assets/portforio.jpg" />
      </div>
    </a>
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
      margin-right: 100px;
    }
    &:hover{
      opacity: 0.8;
    }
  }
}
</style>