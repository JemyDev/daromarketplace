// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueResource from "vue-resource";
import VueClipboard from "vue-clipboard2";
import App from "./App";
import router from "./router";
import store from "./store";
import filters from "./helpers/filters";

Vue.config.productionTip = false;

Vue.filter("formatCurrency", filters.formatCurrency);
Vue.filter("formatItemName", filters.formatItemName);

Vue.use(VueResource);
Vue.use(VueClipboard);

Vue.prototype.$appName = "DARO Marketplace";

/* eslint-disable no-new */
const app = new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
