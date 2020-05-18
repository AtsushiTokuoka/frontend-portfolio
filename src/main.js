// vue
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// js
import "@/assets/ts/sub";

// scss
import "@/assets/scss/main.scss";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
