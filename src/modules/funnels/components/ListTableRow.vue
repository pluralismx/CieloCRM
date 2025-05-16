<template>
  <tr class="border-b border-primary">
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
</template>
<script>
import {formatDate} from "@/utils/dates.js";
export default {
  name: 'ListTableRow',
  props: {
    list: {},
    required: false
  },
  methods: {
    formatDate,
    deleteList(id) {
      this.listsStore.deleteList(id)
    }
  }
}
</script>