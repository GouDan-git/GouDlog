const menu = {
  state: () => ({
    asideMenu: [],
  }),
  mutations: {
    setAsideMenu(state: any, payload: Array<Object>) {
      state.asideMenu = payload;
    },
  },
};
export default menu;
