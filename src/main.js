import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {ScrollNumber} from "vue-scroll-number";
import ElementUI from 'element-ui';
import moment from 'moment'
import VueRouter from 'vue-router'

//import "@/assets/custom-variables.scss";

Vue.config.productionTip = false
Vue.use(ScrollNumber)
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.prototype.$moment = moment;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

