<template>
  <div class="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center bg-[rgba(0,0,0,0.7)] z-50">
    <!-- Modal window -->
    <div class="bg-basic rounded-md overflow-hidden min-h-[382px] w-[400px] flex flex-col justify-between">
      <!-- title bar -->
      <div class="bg-primary p-2 flex flex-row items-center justify-between">
        <p class="text-basic">{{ $t('funnels.createListModal.title') }}</p>
        <div @click="layoutStore.toggleTool('funnels', 'CreateListModal')">
          <X size="18" color="white" class="cursor-pointer"/>
        </div>
      </div>

      <!-- body -->
      <div v-show="!loading" class="p-4 flex flex-col gap-4 flex-1">

        <div class="flex flex-col gap-2">
          <label>{{ $t('funnels.createListModal.type') }}</label>
          <CheckBox
            class="flex flex-row gap-4"
            :options="checkBoxOptions"
            :multiple="false"
            v-model="form.funnel"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label>{{ $t('funnels.createListModal.name') }}</label>
          <input
            class="input-primary"
            v-model="form.name"
            :disabled="response"
          >
        </div>

        <div
            v-show="form.funnel"
            class="flex flex-col gap-2">
          <label>{{ $t('funnels.createListModal.apiKey') }}</label>
          <input
            class="input-primary"
            :placeholder="$t('funnels.createListModal.apiKeyPlaceholder')"
            :value="api_key"
            disabled
          >
        </div>

        <div
            v-show="api_key"
            class="p-2 border rounded-sm border-primary bg-basic-hover">
          <p class="text-sm text-primary">{{ $t('funnels.createListModal.apiWarning') }}</p>
        </div>
      </div>

      <!-- Footer -->
      <div v-show="!loading" class="p-4 rounded-b-md">
        <div v-show="!response" class="flex justify-center gap-4">
          <button class="btn-primary w-[100px]" @click="layoutStore.toggleTool('funnels', 'CreateListModal')">{{ $t('common.cancel') }}</button>
          <button class="btn-primary w-[100px]" @click="createList">{{ $t('common.accept') }}</button>
        </div>
        <div v-show="response" class="flex justify-center gap-4">
          <button class="btn-primary w-[100px]" @click="layoutStore.toggleTool('funnels', 'CreateListModal')">{{ $t('common.ok') }}</button>
        </div>
      </div>

      <!-- Loading -->
      <div v-show="loading" class="h-full w-full flex flex-col items-center justify-center gap-2 text-primary">
        <LoaderCircle class="animate-spin" size="40"/>
        <p>{{ $t('funnels.createListModal.loading') }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import {X, LoaderCircle} from 'lucide-vue-next'
import {useLayoutStore} from "@/stores/layout.js";
import {useDashboardStore} from "@/stores/dashboard.js";
import CheckBox from "@/components/CheckBox/CheckBox.vue";

export default {
  name: 'CreateListModal',
  components: {CheckBox, X, LoaderCircle},
  computed: {
    layoutStore() {
      return useLayoutStore();
    },
    dashboardStore() {
      return useDashboardStore();
    },
    checkBoxOptions() {
      return [
        { value: true,  label: this.$t('funnels.createListModal.funnel') },
        { value: false, label: this.$t('funnels.createListModal.list')  }
      ]
    }
  },
  data () {
    return {
      form: {
        name: '',
        funnel: true,
      },
      loading: false,
      response: null,
      api_key: null
    }
  },
  methods: {
    async createList() {
      this.loading = true
      this.api_key = null

      try{
        const request = await this.dashboardStore.createList(this.form);

        if(!request){
          this.response = this.$t('funnels.createListModal.error');
        }

        this.$toast(this.$t('funnels.createListModal.success'), 'success', 3000);
        this.response = this.$t('funnels.createListModal.success');
        this.api_key = request.lead_list.api_key;
        this.loading = false;

      }catch(error){
        console.log(error)
      }

    }
  }
}
</script>