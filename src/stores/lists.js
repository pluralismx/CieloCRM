import { defineStore } from 'pinia'
import { api } from '@/services/axios'

export const useListsStore = defineStore('lists', {
  state: () => ({
    lists: [],
  }),

  actions: {
    async fetchLists() {
      try {
        const response = await api.get('/api/list/all')
        console.log(response.data)
        this.lists = response.data.lead_lists
      } catch (error) {
        console.log(error)
      }
    },
    async deleteList(id) {
      try{
        const response = await api.delete('/api/list/destroy/' + id)
        console.log(response.data)
        this.lists = this.lists.filter(list => list.id !== id)
      } catch (error) {
        console.log(error)
      }
    }
  }
})