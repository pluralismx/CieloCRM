<template>
  <div class="p-8 flex flex-col flex-1">

    <div class="flex gap-8">
      <!-- List Editor -->
      <ListEditor/>
    </div>

  </div>
</template>
<script>
import ListEditor from './components/ListEditor.vue'
export default {
  name: 'Admin',
  components: {
    ListEditor,
  }
}
</script>