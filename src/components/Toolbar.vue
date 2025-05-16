<template>
  <div class="bg-yellow-100 p-4">
    <ul class="flex flex-row gap-8">
      <li
        v-for="option in toolbarOptions"
        :key="option.label"
        @click="layoutStore.toggleTool(option.module, option.tool)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
<script>
import {useLayoutStore} from "@/stores/layout.js";

export default {
  name: 'Toolbar',
  computed: {
    layoutStore() {
      return useLayoutStore();
    },
    toolbarOptions() {
      return this.layoutStore.toolbarOptions;
    }
  },

}
</script>