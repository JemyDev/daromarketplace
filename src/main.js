// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App";
import router from "./router";
import store from "./store";
import zenyCurrency from "./helpers/zenyCurrency";

Vue.config.productionTip = false;

Vue.filter("zenyCurrency", zenyCurrency);

Vue.use(VueResource);

Vue.prototype.$appName = "DARO Marketplace";

/* eslint-disable no-new */
const app = new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
