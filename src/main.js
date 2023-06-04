import { createApp } from "vue";
import router from "@/router";
import "./style.css";
import "./common/style/theme.css";
import "lib-flexible/flexible";
import App from "./App.vue";

import { Button } from "vant";

const app = createApp(App);

app.use(router);

app.use(Button);

app.mount("#app");
