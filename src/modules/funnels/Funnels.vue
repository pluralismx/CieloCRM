<template>

      <!-- Tabla de listas -->
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
          <tr class="border-b border-primary" v-for="list in listsStore.lists" :key="list.id">
            <td class="p-2 text-center">
              <input type="checkbox"/>
            </td>
            <td class="p-2 text-center">{{ list.api_key ? 'Si' : 'No' }}</td>
            <td class="p-2 text-center">{{ list.name }}</td>
            <td class="p-2 text-center">40</td>
            <td class="p-2 text-center">1</td>
            <td class="p-2 text-center">{{ formatDate(list.created_at) }}</td>
            <td class="p-2 text-center">
              <div class="flex items-center justify-between gap-2">
                <button class="btn-primary w-full">Editar</button>
                <button class="btn-warn w-full" @click="deleteList(list.id)">Eliminar</button>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

</template>
<script>
import {useListsStore} from "@/stores/lists.js";
import { formatDate } from '@/utils/dates.js';
import { CirclePlus } from 'lucide-vue-next';

export default {
  name: 'ListEditor',
  components: {
    CirclePlus
  },
  computed: {
    listsStore() {
      return useListsStore()
    }
  },
  methods: {
    formatDate,
    async deleteList(id) {
      console.log(id)
      await this.listsStore.deleteList(id)
    }
  }
}
</script>