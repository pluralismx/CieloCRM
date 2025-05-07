<template>
  <div
      :class="['flex', $attrs.class, dropdownState.isOpen ? 'rounded-b-none' : '']"
      @click="dropdownState.toggle()">
      {{ dropdownState.label || $t('navbar.listSelectPlaceholder') }}
    <ChevronDown/>
  </div>
</template>
<script>
import {ChevronDown} from "lucide-vue-next";
export default {
  name: 'DropdownTrigger',
  components: {
    ChevronDown
  },
  inject: ['dropdownState']
}
</script>