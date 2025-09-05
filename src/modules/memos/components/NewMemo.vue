<template>
  <!-- New memo -->
  <div class="bg-basic shadow-md min-h-[350px] rounded-md flex flex-col">
    <div>
      <input v-model="form.title" type="text" :placeholder="$t('memos.memoTitle')" class="focus:outline-none p-4 text-xl"/>
    </div>
    <div class="flex-1">
      <textarea v-model="form.content" :placeholder="$t('memos.memoContent')" class="w-full h-full focus:outline-none resize-none px-4 scroll-thin"/>
    </div>
    <div class="p-4 flex">
      <div @click="handleSubmit()">
        <Save class="text-gray-400 hover:text-primary cursor-pointer" size="20"/>
      </div>
    </div>
  </div>
</template>
<script>
import {useDashboardStore} from "@/stores/dashboard.js";
import {Save} from 'lucide-vue-next'
export default {
  name: 'NewMemo',
  components: {Save},
  data() {
    return {
      dashboardStore: useDashboardStore(),
      form: {
        title: null,
        content: null
      }
    }
  },
  methods: {
    async handleSubmit() {
      // console.log(this.dashboardStore.selectedList);
      if(this.dashboardStore.selectedList === null)   {
        this.$toast(this.$t('funnels.createListModal.success'), 'error', 3000);
        return
      }

      const memo =  {
        ...this.form,
        lead_list_id: this.dashboardStore.selectedList
      }

      const response = await this.dashboardStore.createMemo(memo);
      console.log('Memo was stored successfully:', response);
    }
  }
}
</script>