import menu from "./modules/menu.js";
import { createStore } from "vuex";

const store = createStore({
  modules: {
    menu: menu,
  },
});

export default store;
