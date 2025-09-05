<template>
  <div class="relative" ref="dropdown">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'Dropdown',
  props: {
    modelValue: {
      type: [String, Number],
      required: false
    }
  },
  data() {
    return {
      isOpen: false,
      label: ""
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
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
    },
    handleClickOutside(event) {
      if (this.$refs.dropdown && !this.$refs.dropdown.contains(event.target)) {
        this.isOpen = false;
      }
    }
  },
  provide() {
    return {
      dropdownState: this,
    }
  }
}
</script>