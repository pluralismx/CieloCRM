<template>
  <main class="bg-basic-hover flex flex-col h-[100vh]">
    <Navbar/>
    <section class="h-0 flex-1 flex flex-row">
      <Memos v-show="sidebar"/>
      <div class="flex flex-col flex-1 mx-8 mt-8 shadow-2xl">
        <Toolbar/>
        <div class="p-8 flex flex-1">
          <component :is="activeModule" />
        </div>
      </div>
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
import Funnels from "@/modules/funnels/Funnels.vue"
import Leads from "@/modules/leads/Leads.vue"
import Memos from "@/modules/memos/Memos.vue"
import Email from "@/modules/email/Email.vue"
import Friends from "@/modules/friends/Friends.vue"
import Products from "@/modules/products/Products.vue"
import Account from "@/modules/account/Account.vue"
import Settings from "@/modules/settings/Settings.vue"
import Toolbar from "@/components/Toolbar.vue";

export default {
  name: 'Dashboard',
  components: {
    Toolbar,
    Navbar,
    Memos,
    Adminbar,
    Statusbar,
    Funnels,
    Leads,
    Friends,
    Email,
    Products,
    Account,
    Settings
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