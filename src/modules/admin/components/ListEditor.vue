<template>
  <div class="rounded-md bg-silver flex-1 shadow-md">
    <!-- Title Bar -->
    <div class="bg-primary p-4 rounded-t-md flex justify-between">
      <h1 class="text-basic">Mis Listas</h1>
      <div class="flex items-center gap-1 text-basic hover:text-accent hover:cursor-pointer">
        <CirclePlus size="18"/>
        <p>Nueva lista</p>
      </div>
    </div>

    <!-- Body -->
    <div class="p-4">
      <!-- Tabla de listas -->
      <div class="rounded-md border">
        <table class="w-full">
          <thead>
          <tr class="border-b">
            <th class="w-[8%] p-2">Embudo</th>
            <th class="w-[32%] p-2">Nombre</th>
            <th class="w-[17%] p-2">Prospectos</th>
            <th class="w-[20%] p-2">Creada el</th>
            <th class="w-[23%] p-2">Acciones</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="list in listsStore.lists" :key="list.id">
            <td class="p-2 text-center border-r">{{ list.api_key ? 'Si' : 'No' }}</td>
            <td class="p-2 text-center border-r">{{ list.name }}</td>
            <td class="p-2 border-r"></td>
            <td class="p-2 text-center border-r">{{ formatDate(list.created_at) }}</td>
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


    </div>


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