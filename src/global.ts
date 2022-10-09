const setGlobal = function (app: any) {
  const globalProperties = app.config.globalProperties;

  globalProperties.$happinessAddress = "http://127.0.0.1:5174/";
};
export default setGlobal;
