<template>
  <div class="bg-primary h-full w-[350px] flex flex-col">

    <div class="p-2 text-basic flex items-center justify-between">
      <div class="hover:bg-basic hover:text-primary rounded-full cursor-pointer">
        <Plus size="20" @click="toggleDrawer()"/>
      </div>
    </div>
    <div class="flex flex-col overflow-y-scroll">
      <div
          :class="[
            'transition-all px-8 pb-8 flex flex-col gap-8 ' ,
            { 'translate-y-[-360px]' : !isDrawerOpen, 'translate-y-0' : isDrawerOpen}
          ]">
        <NewMemo/>
        <Memo v-for="memo in memos" :key="memo.id" :memo="memo" />
      </div>

    </div>

  </div>
</template>

<script>
import NewMemo from './components/NewMemo.vue'
import Memo from './components/Memo.vue'
import {Plus, Notebook, StickyNote} from 'lucide-vue-next'
import { useDashboardStore } from "@/stores/dashboard.js"

export default {
  name: 'Memos',
  components: { NewMemo, Memo, Plus, Notebook, StickyNote },
  computed: {
    memos() {
      const store = useDashboardStore()
      return store.memos
    }
  },
  data() {
    return{
      isDrawerOpen: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
      console.log(this.isDrawerOpen);
    }
  }
}
</script>
