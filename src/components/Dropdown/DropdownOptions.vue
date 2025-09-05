<template>
  <ul :class="['absolute overflow-hidden', $attrs.class]">
    <slot/>
  </ul>
</template>
<script>
export default {
  name: 'DropdownOptions',
  inject: ['dropdownState']
}
</script>