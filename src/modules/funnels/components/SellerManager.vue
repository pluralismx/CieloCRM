<template>
  <div class="flex-1 flex flex-col border border-gray-300">
    <div class="p-2 border-b border-b-gray-300">
      <p class="font-bold">Vendedores asignados</p>
    </div>
    <div class="h-0 flex-1 flex flex-col overflow-y-scroll retro-scroll">
      <!-- Team Member strip -->
      <SellerStrip/>
      <SellerStrip/>
      <SellerStrip/>
      <SellerStrip/>
      <SellerStrip/>
    </div>

    <!-- Footer -->
    <div class="p-2 border-t border-gray-300">
      <p>Añadir miembro</p>
      <Dropdown v-model="selected" @change="miMetodo" :label="riata">
        <DropdownTrigger
            class="w-[250px] bg-white border border-gray-300 justify-between p-2 text-primary"
        />
        <DropdownOptions class="bg-white w-full rounded-b-md shadow-md">
          <DropdownItem
              v-for="item in listsStore.lists"
              :key="item.id"
              :value="item.id"
              :label="item.name"
              class="text-primary p-2 hover:cursor-pointer hover:bg-silver"
          />
        </DropdownOptions>
      </Dropdown>
    </div>

  </div>
</template>
<script>
import DropdownTrigger from "@/components/Dropdown/DropdownTrigger.vue";
import SellerStrip from "@/modules/funnels/components/SellerStrip.vue";
import Dropdown from "@/components/Dropdown/Dropdown.vue";
import DropdownOptions from "@/components/Dropdown/DropdownOptions.vue";
import DropdownItem from "@/components/Dropdown/DropdownItem.vue";
import {useListsStore} from "@/stores/lists.js";
export default {
  name: 'SellerManager',
  components: {
    SellerStrip,
    Dropdown,
    DropdownItem,
    DropdownOptions,
    DropdownTrigger,
  },
  data() {
    return {
      listsStore: useListsStore(),
    }
  }
}
</script>