import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes";
import { createPinia } from "pinia";

import plausible from "./plugins/plausible";

const plausibleOptions = {
  domain: "www.olaf-linscheid.de",
  apiHost: "https://tracking.jmartz.gmbh",
  hashMode: false,
  trackLocalhost: false,
};

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFireFlameSimple,
  faToilet,
  faWater,
  faTimes,
  faInfo,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
library.add(faFireFlameSimple, faWater, faToilet, faEdit, faTimes, faInfo);
app.component("fa", FontAwesomeIcon);

app.use(plausible, plausibleOptions);
app.use(routes);
app.use(createPinia());
app.mount("#app");
