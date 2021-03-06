import Vue from 'vue';
import App from './App.vue';
import router from './router';
import MainHeader from './views/MainHeader.vue';
import MainFooter from './views/MainFooter.vue';
import FindMaskModal from './views/FindMaskModal.vue';
import FurimaModal from './views/FurimaModal.vue';
import ProfileModal from './views/ProfileModal.vue';
import SpreadSheetModal from './views/spreadsheetModal.vue';

// fontawsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons"; 
import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(faGithub, faTwitter,fas, far, fab);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component('MainHeader', MainHeader)
Vue.component('MainFooter', MainFooter)
Vue.component('FindMaskModal',FindMaskModal)
Vue.component('FurimaModal',FurimaModal)
Vue.component('ProfileModal',ProfileModal)
Vue.component('SpreadSheetModal',SpreadSheetModal)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
