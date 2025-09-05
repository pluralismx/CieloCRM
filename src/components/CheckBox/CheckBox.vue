<template>
  <div :class="[$attrs.class, 'flex flex-col gap-2']">
    <label
        v-for="option in options"
        :key="option.value"
        class="flex items-center cursor-pointer select-none"
    >
      <!-- input oculto -->
      <input
          :type="multiple ? 'checkbox' : 'radio'"
          :name="multiple ? null : groupName"
          :value="option.value"
          :checked="multiple ? modelValue.includes(option.value) : modelValue === option.value"
          @change="toggle(option.value, $event)"
          class="hidden peer"
      />

      <!-- caja personalizada -->
      <span
          class="w-5 h-5 flex items-center justify-center bg-white rounded-sm border border-gray-300 transition-colors peer-checked:bg-primary"
      >
        <svg
            v-if="multiple ? modelValue.includes(option.value) : modelValue === option.value"
            class="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
      </span>

      <span class="ml-2">{{ option.label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    modelValue: {
      type: [Array, Boolean, String, Number],
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    groupName: {
      type: String,
      default: () => `checkbox-${Math.random().toString(36).substr(2, 9)}` // nombre único por defecto
    }
  },
  methods: {
    toggle(value, event) {
      let newValue;

      if (this.multiple) {
        newValue = Array.isArray(this.modelValue) ? [...this.modelValue] : [];
        if (event.target.checked) {
          newValue.push(value);
        } else {
          newValue = newValue.filter(v => v !== value);
        }
      } else {
        newValue = event.target.checked ? value : null;
      }

      this.$emit("update:modelValue", newValue);
    },
  },
};
</script>
