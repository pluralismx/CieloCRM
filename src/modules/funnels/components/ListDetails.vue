<template>
  <div class="bg-white shadow-lg rounded-md p-4 flex-1 h-0 flex flex-col">
    <!-- head -->
    <div class="mb-4">
      <p class="text-2xl">Detalles de 36 a 40</p>
    </div>

    <!-- body -->
    <div class="flex-1 h-0 flex gap-4">
      <!-- Gestor de vendedores component -->
      <SellerManager/>
      <SellerManager/>
    </div>
  </div>
</template>
<script>
import SellerManager from "./SellerManager.vue";

export default {
  name: 'ListDetails',
  components: {SellerManager},
}
</script>