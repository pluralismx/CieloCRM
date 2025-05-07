<template>
  <div class="h-full bg-primary flex flex-col">

    <div
        class="flex flex-col items-center p-4 text-basic border-b"
        @click="layoutStore.setActiveModule( 'admin')"
    >
      <Funnel size="35"/>
      <p>{{ $t('adminbar.funnels') }}</p>
    </div>

    <div
        class="flex flex-col items-center p-4 text-basic border-b"
        @click="layoutStore.setActiveModule( 'friends')"
    >
      <Users size="35"/>
      <p>{{ $t('adminbar.friends') }}</p>
    </div>

    <div
        class="flex flex-col items-center p-4 text-basic border-b"
        @click="layoutStore.setActiveModule( 'products')"
    >
      <HandHeart size="35"/>
      <p>{{ $t('adminbar.products') }}</p>
    </div>

    <div
        class="flex flex-col items-center p-4 text-basic border-b"
        @click="layoutStore.setActiveModule( 'account')"
    >
      <CircleUser size="35"/>
      <p>{{ $t('adminbar.account') }}</p>
    </div>

  </div>
</template>
<script>
import { Funnel, Users, HandHeart, CircleUser } from 'lucide-vue-next';
import {useLayoutStore} from "@/stores/layout.js";
export default {
  name: 'Adminbar',
  components: {
    Funnel,
    Users,
    HandHeart,
    CircleUser,
  },
  data() {
    return{
      layoutStore: useLayoutStore(),
    }
  }
}
</script>