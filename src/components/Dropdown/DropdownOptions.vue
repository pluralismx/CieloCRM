<template>
  <ul :class="['absolute', $attrs.class]">
    <slot/>
  </ul>
</template>
<script>
export default {
  name: 'DropdownOptions',
  inject: ['dropdownState']
}
</script>