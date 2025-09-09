<template>

    <div class="flex flex-col gap-8 grow">
      <component
          v-for="tool in layoutStore.openedTools['settings']"
          :key="tool"
          :is="tools['settings'][tool]"
      />
    </div>

</template>
<script>
import { useLayoutStore } from "@/stores/layout.js";
import { ToolRegistry } from "@/utils/toolRegistry.js"

export default {
  name: 'Settings',
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