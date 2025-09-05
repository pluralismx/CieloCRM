<template>
    <!-- Memo -->
    <div class="bg-basic shadow-md min-h-[350px] rounded-md flex flex-col">
      <div>
        <input type="text" class="focus:outline-none p-4 text-xl" :value="memo.title"/>
      </div>

      <div class="flex-1">
        <textarea class="w-full h-full focus:outline-none resize-none px-4 scroll-thin"/>
      </div>

      <div class="p-4 flex items-center gap-4">
        <div @click="handleSubmit()">
          <Pencil class="text-gray-400 hover:text-primary cursor-pointer" size="20"/>
        </div>
        <div @click="handleSubmit()">
          <Copy class="text-gray-400 hover:text-primary cursor-pointer" size="20"/>
        </div>
        <div @click="handleSubmit()">
          <Trash class="text-gray-400 hover:text-primary cursor-pointer" size="20"/>
        </div>
      </div>
    </div>
</template>
<script>
import {Copy, Trash, Pencil} from "lucide-vue-next";

export default {
  components: {Copy, Trash, Pencil},
  props: {
    memo: {
      type: Object,
      required: true
    }
  },
  name: 'Memo'
}
</script>