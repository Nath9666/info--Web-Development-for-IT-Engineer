<template>
  <button key="">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "#3498db", // Default color (you can change it)
    },
  },
  computed: {
    cssVars() {
      return {
        /* variables you want to pass to css */
        "--color": this.color,
      };
    },
    data() {
      return {
        isHovered: false,
        isFocused: false,
      };
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;
  border: none;
  border-radius: 5px;
  background-color: var(--color);
}
</style>
