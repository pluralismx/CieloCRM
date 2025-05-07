<template>
  <nav class="bg-primary p-4 text-basic shadow-md flex z-50">
    <!-- Funnel Menu -->
    <ul class="flex items-center gap-8 w-1/2">
      <li class="hover:cursor-pointer flex items-center gap-2">
        {{ $t('navbar.list') }}
        <Dropdown v-model="selected" @change="miMetodo">
          <DropdownTrigger
            class="w-[250px] bg-basic justify-between rounded-md p-2 text-primary"
          />
          <DropdownOptions class="bg-white w-full rounded-b-md shadow-md">
            <DropdownItem
                v-for="item in listsStore.lists"
                :key="item.id"
                :value="item.id"
                :label="item.name"
                class="text-primary p-2 hover:cursor-pointer hover:bg-silver"
            />
          </DropdownOptions>
        </Dropdown>
      </li>
      <li class="hover:cursor-pointer" @click="layoutStore.toggleSideBar()">{{ $t('navbar.memos') }}</li>
      <li class="hover:cursor-pointer" @click="layoutStore.setActiveModule('leads')">{{ $t('navbar.leads') }}</li>
      <li class="hover:cursor-pointer" @click="layoutStore.setActiveModule('email')">{{ $t('navbar.email') }}</li>
    </ul>

    <!-- User Menu -->
    <ul class="flex items-center justify-end gap-8 w-1/2">
      <li>
        {{ $t('navbar.settings') }}
      </li>
      <li class="hover:cursor-pointer" @click="handleLogOut">
        {{ $t('navbar.logout') }}
      </li>
    </ul>
  </nav>
</template>
<script>

  // Stores
  import { useAuthStore } from '@/stores/auth'
  import { useListsStore } from "@/stores/lists.js";
  import { useLayoutStore } from "@/stores/layout.js";

  // UI
  import Dropdown from '@/components/Dropdown/Dropdown.vue';
  import DropdownTrigger from "@/components/Dropdown/DropdownTrigger.vue";
  import DropdownOptions from "@/components/Dropdown/DropdownOptions.vue";
  import DropdownItem from "@/components/Dropdown/DropdownItem.vue";

  export default {
    name: 'Navbar',
    components: {DropdownItem, DropdownOptions, DropdownTrigger, Dropdown},
    data() {
      return {
        auth: useAuthStore(),
        listsStore: useListsStore(),
        layoutStore: useLayoutStore(),
        selected: null,
      }
    },
    methods: {
      async handleLogOut () {
        try {
          await this.auth.logout()
        }catch (error) {
          console.log(error)
        }
      },
      miMetodo () {
        alert(this.selected)
      }
    }
  }
</script>
