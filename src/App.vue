<template>
  <Auth
    v-if="!isLoggedIn"
    @login-success="isLoggedIn = true"
  />
  <Dashboard
    v-if="isLoggedIn"
  />
</template>
<script>
  import Auth from '@/layouts/Auth.vue'
  import Dashboard from '@/layouts/Dashboard.vue'
  export default {
    name: 'App',
    components: {
      Auth,
      Dashboard
    },
    data() {
      return {
        "isLoggedIn" : false,
      }
    },
    methods: {
      changeLanguage: function (lang) {
        this.$i18n.locale = lang
      }
    }

  }
</script>
