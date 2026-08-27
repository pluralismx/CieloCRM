import { defineStore } from 'pinia'
import { api } from '@/lib/axios.js'

// Flip to false when the API login is available again.
const SKIP_AUTH = true
const mockUser = {
  id: 1,
  name: 'Preview User',
  email: 'gerardo@email.com',
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: SKIP_AUTH ? mockUser : null,
    token: SKIP_AUTH ? 'ui-preview' : (localStorage.getItem('access_token') || null),
  }),

  actions: {
    async login(credentials) {
      if (SKIP_AUTH) {
        this.user = mockUser
        this.token = 'ui-preview'
        return { data: { status: 'success', user: mockUser } }
      }

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
      if (SKIP_AUTH) {
        this.user = null
        this.token = null
        return
      }

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
