<template>
  <div v-if="isVisible"
     :class="{
      'p-4 fixed z-50 bottom-5 right-5 rounded-md shadow-lg min-w-[200px]': true,
      'bg-basic text-primary': type === 'success',
      'bg-accent text-warn': type === 'error'
     }"
  >
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      isVisible: false,
      message: "test",
      timeoutId: null,
      type: "error"
    };
  },
  methods: {
    show(msg, type, duration = 3000) {
      this.message = msg;
      this.type = type;
      this.isVisible = true;
      if (this.timeoutId) clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        this.isVisible = false;
      }, duration);
    }
  }
};
</script>
