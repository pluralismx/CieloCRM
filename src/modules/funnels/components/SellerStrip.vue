<template>
  <div class="p-2  bg-white flex justify-between items-center hover:cursor-pointer border-b border-gray-300">
    <div>
      <p>Fulanito de tal</p>
      <p class="text-sm italic">SELLER</p>
    </div>
    <div>
      <X class="text-gray-400"/>
    </div>
  </div>
</template>
<script>
import {X} from "lucide-vue-next";

export default {
  name: 'SellerStrip',
  components: {X},
  props: {
    seller: Object,
    required: false
  }
}
</script>