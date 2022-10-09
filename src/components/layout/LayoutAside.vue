<template>
  <el-menu
    class="el-menu-vertical"
    :collapse="true"
    :default-active="activeIndex"
    @select="handleSelect"
  >
    <el-menu-item
      :index="item.name"
      v-for="(item, index) in asideMenu"
      :key="index"
    >
      <el-icon>
        <component :is="item.icon"></component>
      </el-icon>
      <template #title>{{ item.name }}</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

/**
 * @description 监听store中asideMenu变化来更新侧边栏
 */
const activeIndex = ref("");
const store = useStore();
let asideMenu = ref(store.state.menu.asideMenu);
watch(
  () => store.state.menu.asideMenu,
  (newVal: Array<any>) => {
    asideMenu.value = newVal;
    if (newVal && newVal.length) {
      activeIndex.value = newVal[0].name;
    }
  }
);

/**
 * @description 侧边栏点击事件
 * @param key 点击的菜单名称
 */
const router = useRouter();
const handleSelect = (key: Object) => {
  const items = asideMenu.value.filter((item: any) => {
    return item.name === key;
  });
  router.push(items[0].path);
};
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
