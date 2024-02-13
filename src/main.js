import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import store from "./store";

//Emitter Config
import mitt from "mitt";
const Emitter = mitt();
//Pinia
import { createPinia } from "pinia";

//swiper config
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App)
  .use(vuetify)
  .use(createPinia())
  .provide("Emitter", Emitter)
  .use(router)
  .mount("#app");
