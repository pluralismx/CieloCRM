import {api} from '@/lib/axios.js'

const MemoService = {
  async createMemo(memo){
    console.log('preparing to send:', memo);
    try{
      const response = await api.post('memo/create', memo);
      return response.data;
    }catch(e) {
      console.log('axios request failed',e);
    }
  },

  async fetchMemos(list){
    try{
      const response = await api.post('memo/all/', {'lead_list_id': list})
      console.log(response);
      return response.data;
    }catch(e) {
      console.log('axios request failed',e);
    }
  },
}
export default MemoService;