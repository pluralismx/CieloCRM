<template>
  <li
      :class="[$attrs.class]"
      v-if="dropdownState.isOpen"
      @click="dropdownState.select(this.value, this.label)"
  >
      {{ label }}
  </li>
</template>
<script>
export default {
  name: 'DropdownItem',
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      required: true,
    },
    isLast: {
      type: Boolean,
      default: false
    }
  },
  inject: ['dropdownState']
}
</script>