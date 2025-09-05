import {defineStore} from 'pinia'
import ListService from "@/services/ListService.js"
import MemoService from "@/services/MemoService.js"

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    selectedList: null,
    lists: [],
    memos: [],
  }),

  actions: {
    // Dashboard
    async fetchDashboardData(){
      await this.fetchLists();
      await this.fetchListData();
    },

    async fetchListData(id = this.lists[0].id){
      this.selectedList = id;
      await this.loadMemos(id);
    },

    async fetchLists(){
      const response = await ListService.fetchLists();
      if(response.status !== 'success'){
        return false;
      }
      this.lists = response.lead_lists;
    },

    async createList(form){
      const response = await ListService.createList(form);
      if(response.status !== 'success'){
        return false;
      }
      this.lists.push(response.lead_list);
      return response;
    },

    // Memos
    async createMemo(memo){
      const response = await MemoService.createMemo(memo);
      if(!response){
        return;
      }
      this.memos.push(response);
      return response;
    },

    async loadMemos(list){
      const response = await MemoService.fetchMemos(list);
      if(response.status !== 'success'){
        return false;
      }
      this.memos = response.memos;
      return response;
    }

  }
})