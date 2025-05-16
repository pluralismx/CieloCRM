<template>
  <div class="relative">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'Dropdown',
  props: {
    modelValue: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      isOpen: false,
      label: ""
    }
  },
  methods: {
    toggle() {
      this.isOpen ? this.isOpen = false : this.isOpen = true;
    },
    select(value, label) {
      this.$emit('update:modelValue', value)
      this.label = label;
      this.isOpen = false;
      this.$emit('change', value);
    }
  },
  provide() {
    return {
      dropdownState: this,
    }
  }
}
</script>