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
import { ref } from "vue";
import { useStore } from "vuex";

const activeIndex = ref("happiness");
const store = useStore();
const handleSelect = (key: string) => {
  const items = menu.filter((item) => {
    return item.name === key;
  });
  store.commit("setAsideMenu", items[0].children);
};
</script>
