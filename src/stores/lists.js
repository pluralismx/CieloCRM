import { defineStore } from 'pinia'
import { api } from '@/lib/axios.js'

export const useListsStore = defineStore('lists', {
  state: () => ({
    lists: [],
  }),

  actions: {
    async fetchLists() {
      try {
        const response = await api.get('list/all')
        this.lists = response.data.lead_lists
      } catch (error) {
        console.log(error)
      }
    },
    async deleteList(id) {
      try{
        const response = await api.delete('list/destroy/' + id)
        console.log(response.data)
        this.lists = this.lists.filter(list => list.id !== id)
      } catch (error) {
        console.log(error)
      }
    },
    async createList(form) {
      try {
        const response = await api.post('list/create', form)
        if(response.data.status === 'success'){
          this.lists.push(response.data.lead_list)
        }
        return response
      }catch (error) {
        console.log(error)
      }
    }
  }
})