<script setup lang="ts">
import { RouterView } from "vue-router";
import Head from "@/components/layout/LayoutHead.vue";
import Aside from "@/components/layout/LayoutAside.vue";
</script>

<template>
  <el-container class="container-outside">
    <el-header>
      <Head />
    </el-header>
    <el-container class="container-inside">
      <el-aside>
        <Aside />
      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.el-header {
  padding: 0;
}
.container-outside {
  height: 100%;
}
.container-inside {
  height: calc(100% - 59px);
}
.el-aside {
  width: auto;
}
</style>
