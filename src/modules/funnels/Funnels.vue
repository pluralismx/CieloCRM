<template>

    <div class="flex flex-col gap-8 grow">
      <component
          v-for="tool in layoutStore.openedTools['funnels']"
          :key="tool"
          :is="tools['funnels'][tool]"
      />
    </div>

</template>
<script>
import { useLayoutStore } from "@/stores/layout.js";
import { ToolRegistry } from "@/utils/toolRegistry.js"

export default {
  name: 'Funnels',
  computed: {
    layoutStore() {
      return useLayoutStore();
    },
    tools() {
      return ToolRegistry
    }
  }
}
</script>