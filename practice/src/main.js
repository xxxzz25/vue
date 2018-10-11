import Vue from "vue";
import FBLogin from "./FBLogin.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(FBLogin)
}).$mount("#app");
