<template>
  <el-menu class="el-menu-vertical" :collapse="true">
    <el-menu-item
      :index="item.name"
      v-for="(item, index) in asideMenu"
      :key="index"
    >
      <el-icon><icon-menu /></el-icon>
      <template #title>{{ item.name }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { Menu as IconMenu } from "@element-plus/icons-vue";
import { useStore } from "vuex";

const store = useStore();
let asideMenu = ref(store.state.menu.asideMenu);
watch(
  () => store.state.menu.asideMenu,
  (newVal: Object) => {
    asideMenu.value = newVal;
  }
);
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  height: 100%;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
