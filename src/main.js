import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHooli } from "@fortawesome/free-brands-svg-icons";

import router from "@/router";
import App from "./App.vue";
import "@/index.css";

library.add(faSearch, faHooli);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
