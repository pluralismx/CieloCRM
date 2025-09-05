<template>
  <div class="p-4 flex items-center justify-between border-b-2 border-primary">
    <h1 class="font-bold">{{ toolbarOptions.title }}</h1>
    <ul class="flex flex-row gap-8">
      <li
        class="cursor-pointer hover:text-primary"
        v-for="option in toolbarOptions.options"
        :key="option.label"
        @click="layoutStore.toggleTool(option.module, option.tool)">
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
<script>
import { useLayoutStore } from "@/stores/layout.js"
import {Wrench} from "lucide-vue-next";
export default {
  name: 'Toolbar',
  components: {Wrench},
  computed: {
    layoutStore() {
      return useLayoutStore();
    },
    toolbarOptions() {
      return this.layoutStore.toolbarOptions;
    }
  },
  mounted() {
    console.log("toolbarOptions (mounted):", this.toolbarOptions);
  }

}
</script>