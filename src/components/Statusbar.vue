<script>
  export default {
    name: 'Statusbar',
  }
</script>
<template>
  <footer class="bg-shadows p-4">
    <ul class="flex justify-between text-primary">
      <li>{{ $t('statusbar.leads') }}</li>
      <li>{{ $t('statusbar.emails') }}</li>
      <li>{{ $t('statusbar.lists') }}</li>
      <li>{{ $t('statusbar.agents') }}</li>
    </ul>
  </footer>
</template>