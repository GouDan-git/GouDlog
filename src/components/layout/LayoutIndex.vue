<script setup lang="ts">
import { RouterView } from "vue-router";
import LayoutHead from "@/components/layout/LayoutHead.vue";
</script>

<template>
  <el-container>
    <el-header>
      <LayoutHead />
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>
