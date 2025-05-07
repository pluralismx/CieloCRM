<template>
  <main class="bg-white flex flex-col h-[100vh]">
    <Navbar/>
    <section class="h-0 flex-1 flex flex-row justify-between">
      <Memos v-show="sidebar"/>
      <component :is="activeModule" />
      <Adminbar/>
    </section>
    <Statusbar/>
  </main>
</template>
<script>
//Layouts
import {useLayoutStore} from "@/stores/layout.js"

// Components
import Navbar from '@/components/Navbar.vue'
import Adminbar from '@/components/Adminbar.vue'
import Statusbar from "@/components/Statusbar.vue"

// Modules
import Admin from "@/modules/admin/Admin.vue"
import Leads from "@/modules/leads/Leads.vue"
import Memos from "@/modules/memos/Memos.vue"
import Email from "@/modules/email/Email.vue"
import Friends from "@/modules/friends/Friends.vue"
import Products from "@/modules/products/Products.vue"
import Account from "@/modules/account/Account.vue"


export default {
  name: 'Dashboard',
  components: {
    Navbar,
    Memos,
    Adminbar,
    Statusbar,
    Admin,
    Leads,
    Friends,
    Email,
    Products,
    Account
  },
  computed: {
    activeModule() {
      return useLayoutStore().activeModule
    },
    sidebar() {
      return useLayoutStore().isSideBarOpen
    }
  },
  data() {
    return {
      layoutStore: useLayoutStore(),
    }
  }
}
</script>
<style scoped>

</style>