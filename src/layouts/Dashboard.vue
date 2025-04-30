<template>
  <main class="bg-basic flex flex-col h-[100vh]">
    <Navbar/>
    <section class="h-0 flex-1">

    </section>
    <Statusbar/>
  </main>
</template>
<script>
  import Navbar from '@/components/Navbar.vue'
  import Statusbar from "@/components/Statusbar.vue";
  export default {
    name: 'Dashboard',
    components: {
      Navbar,
      Statusbar,
    }
  }
</script>
<style scoped>

</style>