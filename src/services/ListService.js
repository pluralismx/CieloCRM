import {api} from "@/lib/axios.js";

const ListService = {

  async fetchLists() {
    try {
      const response = await api.get('list/all')
      return response.data
    } catch (error) {
      console.log(error)
    }
  },

  async deleteList(id) {
    try{
      const response = await api.delete('list/destroy/' + id)
      return response.data
    } catch (error) {
      console.log(error)
    }
  },

  async createList(form) {
    try {
      const response = await api.post('list/create', form)
      return response.data
    }catch (error) {
      console.log(error)
    }
  }

}
export default ListService;