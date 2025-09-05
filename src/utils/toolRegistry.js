import { defineAsyncComponent } from 'vue'

export const ToolRegistry = {
  funnels: {
    ListTable: defineAsyncComponent(() => import('@/modules/funnels/components/ListTable.vue')),
    ListDetails: defineAsyncComponent(() => import('@/modules/funnels/components/ListDetails.vue')),
    CreateListModal: defineAsyncComponent(()=> import('@/modules/funnels/components/CreateListModal.vue'))
  },
}
