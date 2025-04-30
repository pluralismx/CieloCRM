<template>
  <nav class="bg-primary p-4 text-basic shadow-sm flex">
    <ul class="flex gap-8 w-1/2">
      <li class="hover:cursor-pointer">{{ $t('navbar.memos') }}</li>
      <li class="hover:cursor-pointer">{{ $t('navbar.leads') }}</li>
      <li class="hover:cursor-pointer">{{ $t('navbar.admin') }}</li>
    </ul>
    <ul class="flex justify-end gap-8 w-1/2">
      <li class="hover:cursor-pointer">{{ $t('navbar.logout') }}</li>
    </ul>
  </nav>
</template>
<script>
  export default {
    name: 'Navbar',
  }
</script>
