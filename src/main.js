import Vue from "vue";
import App from "./App.vue";
import VueQrcode from '@chenfengyuan/vue-qrcode';
import "./registerServiceWorker";

Vue.component(VueQrcode.name, VueQrcode);

Vue.config.productionTip = false;

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
