<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      :index="item.name"
      v-for="(item, index) in menu"
      :key="index"
      >{{ item.name }}</el-menu-item
    >
  </el-menu>
</template>

<script lang="ts" setup>
import menu from "./menu.json";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const activeIndex = ref("");
const store = useStore();
const router = useRouter();
/**
 * @description 导航栏点击事件
 * @param key 点击的菜单名称
 */
const handleSelect = (key: Object) => {
  const items = menu.filter((item) => {
    return item.name === key;
  });
  store.commit("setAsideMenu", items[0].children);
  router.push(items[0].path);
};

const route = useRoute();
/**
 * @description 根据路由设置activeIndex（导航栏选择菜单）
 */
const setActiveIndex = () => {
  const routePath = (route.path || "") as String;
  const routeArray = routePath.split("/");
  activeIndex.value = routeArray.length ? routeArray[1] : "";
  const items = menu.filter((item) => {
    return item.name === activeIndex.value;
  });
  store.commit("setAsideMenu", items[0].children);
};

onMounted(() => {
  setActiveIndex();
});
</script>
