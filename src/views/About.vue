<template>
  <div class="aboutLow">
    <div class="aboutLow__careers">
      <h3>経歴</h3>
      <ul v-for="career in careers" :key="career">
        <li class="aboutLow__list">{{ career }}</li>
      </ul>
    <div class="aboutLow__technologies">
      <h3>技術</h3>
      <ul v-for="technology in technologies" :key="technology">
        <li class="aboutLow__list">{{ technology }}</li>
      </ul>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      careers: ['1997年生まれ（22歳） 神奈川在住','東京美容学校卒業 → 美容師免許取得','美容師（２年間）','TECH CAMP(３ヶ月短期集中プログラミングスクール)','現在就職活動中'],
      technologies: ['Ruby・Rails','HTML5・CSS3・Bootstrap4・Haml・Sass','JavaScript・Jquery・Vue.js・Nuxt.js','AWS','GitHub']
    }
  }
}
</script>

<style lang="scss" scoped>
.aboutLow{
  width: 80%;
  margin: 50px auto;
  height: 70vh;
  & h3{
    color: #808080; 
    font-size: 2em;
  }
  &__list{
    margin:20px 0
  }
}

</style>
