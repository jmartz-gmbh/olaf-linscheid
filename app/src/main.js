import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import routes from "./routes";

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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
library.add(faFireFlameSimple, faWater, faToilet);
app.component("fa", FontAwesomeIcon);

app.use(plausible, plausibleOptions);
app.use(routes);
app.use(store);
app.mount("#app");
