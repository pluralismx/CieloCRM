<template>

    <div class="flex flex-col gap-8 grow">

      <!--Aqui los quiero renderizar dinamicamente, obvio los componentes correspondientes a funnels en lugar de importarlos como los importo abajo -->
      <!-- List table -->
      <ListTable/>
      <!-- List details -->
      <ListDetails/>

    </div>

</template>
<script>
import { CirclePlus, Delete, Trash2 } from 'lucide-vue-next';
import SellerManager from "@/modules/funnels/components/SellerManager.vue";
import ListTable from "@/modules/funnels/components/ListTable.vue";
import ListDetails from "@/modules/funnels/components/ListDetails.vue";
import {useLayoutStore} from "@/stores/layout.js";

export default {
  name: 'Funnels',
  components: {
    ListDetails,
    ListTable,
    SellerManager,
    CirclePlus,
    Delete,
    Trash2,
  },
  computed: {
    layoutStore() {
      return useLayoutStore();
    },
  }
}
</script>