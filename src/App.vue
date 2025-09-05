<template>
  <Auth
      v-if="!isLoggedIn && !isAppLoading"
  />
  <Dashboard
      v-if="isLoggedIn && !isAppLoading"
  />
  <div
      v-if="isLoggedIn && isAppLoading"
      class="h-[100vh] w-[100vw] bg-shadows flex items-center justify-center text-basic"
  >
    <p class="text-[32px]">{{ $t('loadingScreen.loading') }}</p>
  </div>
</template>

<script>
import Auth from '@/layouts/Auth.vue'
import Dashboard from '@/layouts/Dashboard.vue'
import { useAuthStore } from '@/stores/auth.js'
import { useDashboardStore } from '@/stores/dashboard.js'

export default {
  name: 'App',
  components: {
    Auth,
    Dashboard
  },
  data() {
    return {
      auth: useAuthStore(),
      dashboard: useDashboardStore(),
      isAppLoading: false,
    }
  },
  computed: {
    isLoggedIn() {
      return !!this.auth.user
    }
  },
  watch: {
    async isLoggedIn() {
        this.isAppLoading = true
        // Load Dashboard Data
        await this.dashboard.fetchDashboardData()
        this.isAppLoading = false
    }
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang
    }
  },
}
</script>
