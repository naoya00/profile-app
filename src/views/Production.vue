<template>
  <div class="productionLow">
    <h3>作ったもの</h3>
    <a href="http://find-mask.tokyo/" target=”_blank”>
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
    <a href="http://54.64.42.195/" target=”_blank”>
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
    <a href="#" target=”_blank”>
      <div class="productionLow__content">
        <img src="@/assets/portforio.jpg" />
        <div class="productionLow__content--texts">
          <h2>
            ポートフォリオサイト
          </h2>
            <span>本サイトです。石坂直也という人物をよく知って頂きたく作成致しました。VueCliの理解を深めるためでもあります。</span>
        </div>
      </div>
    </a>
  </div>
</template>

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