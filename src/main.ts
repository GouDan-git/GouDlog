import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import WujieVue from "wujie-vue3";
import * as Icons from "@element-plus/icons-vue";
import setGlobal from "./global.js";

import "element-plus/dist/index.css";
import "@/assets/main.scss";

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
app.use(WujieVue);
app.use(store);
setGlobal(app);
/**
 * @description element-plus 图标导入 注册全局组件
 */
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key]);
});

app.mount("#app");
