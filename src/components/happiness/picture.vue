<template>
  <div>
    <WujieVue
      name="picture"
      :url="proxy.$happinessAddress + 'picture'"
      :sync="true"
    ></WujieVue>
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance() as any;
</script>
