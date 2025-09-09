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
import { useLayoutStore } from "@/stores/layout.js";
import { Wrench } from "lucide-vue-next";

export default {
  name: 'Toolbar',
  components: { Wrench },

  data() {
    return {
      layoutStore: useLayoutStore(), // important to store in data or created hook
    };
  },

  computed: {
    toolbarOptions() {
      return this.layoutStore.toolbarOptions;
    }
  },

  mounted() {
    console.log("🛠 layoutStore:", this.layoutStore);
    console.log("📦 toolbarOptions (mounted):", this.toolbarOptions);
  },

  watch: {
    toolbarOptions: {
      handler(newVal) {
        console.log("🔄 toolbarOptions changed:", newVal);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
