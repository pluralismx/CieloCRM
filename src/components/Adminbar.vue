<template>
  <div class="h-full bg-primary flex flex-col shadow-md border-l border-gray-400">
    <div
        v-for="option in menuOptions"
        :key="option.module_name"
        class="flex flex-col items-center p-4 text-basic border-b hover:bg-basic hover:cursor-pointer hover:text-primary"
        @click="layoutStore.setActiveModule(option.module_name)"
    >
      <component :is="option.icon" :size="35" />
      <p>{{ option.label }}</p>
    </div>
  </div>
</template>

<script>
import { Funnel, Users, HandHeart, CircleUser } from 'lucide-vue-next'
import { useLayoutStore } from '@/stores/layout.js'

export default {
  name: 'Adminbar',
  components: {
    Funnel,
    Users,
    HandHeart,
    CircleUser,
  },
  data() {
    return {
      layoutStore: useLayoutStore(),
    }
  },
  computed: {
    menuOptions() {
      return [
        {
          label: this.$t('adminbar.funnels'),
          icon: 'Funnel',
          module_name: 'funnels',
        },
        {
          label: this.$t('adminbar.friends'),
          icon: 'Users',
          module_name: 'friends',
        },
        {
          label: this.$t('adminbar.products'),
          icon: 'HandHeart',
          module_name: 'products',
        },
        {
          label: this.$t('adminbar.account'),
          icon: 'CircleUser',
          module_name: 'account',
        },
      ]
    }
  }
}
</script>
