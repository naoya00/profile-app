import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MainHeader from './views/MainHeader.vue';
import MainFooter from './views/MainFooter.vue';

// fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
library.add(faGithub, faTwitter);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component('MainHeader', MainHeader)
Vue.component('MainFooter', MainFooter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
