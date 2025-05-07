import { defineStore } from 'pinia'
import { api } from '@/services/axios'
import Cookies from 'js-cookie';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),

  actions: {
    async login(credentials) {
      try{
        await api.get('/sanctum/csrf-cookie')

        const response =  await api.post('/login', credentials, {
          accept: 'application/json',
          headers: {
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN') || ''
          }
        })

        if(response.data.status === 'success') {
          this.user = response.data.user
        }
      } catch (error) {
        console.log(error)
      }
    },

    async logout() {
      try {
        await api.post('/logout', {}, {
          accept: 'application/json',
          headers: {
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN') || ''
          }
        })
        this.user = null
        localStorage.removeItem('token');
      } catch (error) {
        console.log(error)
      }
    },
  }


})