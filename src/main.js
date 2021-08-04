import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";

Vue.config.productionTip = false;

import "./filters";//global filter

    //fiter to rverse as global dirctaly
Vue.filter('reverseIt',v => v.split("").reverse().join(""))

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
