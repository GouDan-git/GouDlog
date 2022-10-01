<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="home">Home</el-menu-item>
    <el-menu-item index="components">Components</el-menu-item>
    <el-menu-item index="happiness">Happiness</el-menu-item>
  </el-menu>
</template>
