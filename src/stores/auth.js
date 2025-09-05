import { defineStore } from 'pinia'
import { api } from '@/lib/axios.js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('access_token') || null,
  }),

  actions: {
    async login(credentials) {
      try {
        const response = await api.post('login', credentials)
        if (response.data.status === 'success') {
          const token = response.data.access_token
          localStorage.setItem('access_token', token)
          this.token = token
          this.user = response.data.user
          api.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }
        return response;
      } catch (error) {
        console.error(error)
      }
    },

    async logout() {
      try {
        await api.post('logout')
        localStorage.removeItem('access_token')
        this.token = null
        this.user = null
        delete api.defaults.headers.common['Authorization']
      } catch (error) {
        console.error(error)
      }
    },

    async fetchUser() {
      try {
        if (!this.token) return
        api.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
        const response = await api.get('user')
        this.user = response.data
      } catch (error) {
        console.error(error)
      }
    },
  },
})
