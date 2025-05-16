<template>
  <div class="bg-basic shadow-lg rounded-md">
    <table class="w-full">
      <thead>
      <tr class="border-b border-warn">
        <th class="w-[5%]">S</th>
        <th class="w-[5%] p-2">Embudo</th>
        <th class="w-[20%] p-2">Nombre</th>
        <th class="w-[20%] p-2">Prospectos</th>
        <th class="w-[20%] p-2">Vendedores</th>
        <th class="w-[20%] p-2">Creada el</th>
        <th class="w-[20%] p-2">Acciones</th>
      </tr>
      </thead>
      <tbody>
        <ListTableRow
          v-for="list in lists" :list="list" :key="list.id"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import ListTableRow from "./ListTableRow.vue";
import {useListsStore} from "@/stores/lists.js";
export default {
  name: 'ListTable',
  components: {ListTableRow},
  computed: {
    lists() {
      return this.listsStore.lists;
    }
  },
  data() {
    return {
      listsStore: useListsStore(),
    }
  }

}
</script>