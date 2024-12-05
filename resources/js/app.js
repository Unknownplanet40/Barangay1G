import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

require("./bootstrap");
// Progress bar
import VueProgressBar from "vue-progressbar";
Vue.use(VueProgressBar, {
    color: "rgba(41, 255, 48, 1)",
    failedColor: "red",
    height: "2px",
});

// Sweet alert
import Swal from "sweetalert2";
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});
window.Toast = Toast;

// Vue filter for date
import moment from "moment";
Vue.filter("date", function (created) {
    return moment(created).format("MMMM Do YYYY");
});

Vue.filter("date_time", function (created) {
    return moment(created).format("MMMM Do YYYY, h:mm:ss a");
});

// Vue pagination
Vue.component("pagination", require("laravel-vue-pagination"));

// bootstrap-vue icons
import { BootstrapVueIcons } from "bootstrap-vue";
Vue.use(BootstrapVueIcons);

// Vue2Editor for text editor
import Vue2Editor from "vue2-editor";
Vue.use(Vue2Editor);

// Set default icon paths for leaflet
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Register vue2-leaflet components globally
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

new Vue({
    el: "#app",
    router,
    store,
    render: (h) => h(App),
});
