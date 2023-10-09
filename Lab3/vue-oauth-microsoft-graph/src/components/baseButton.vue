<template>
  <button
    :style="cssVars"
    :class="{ disabled: disabled, hovered: isHovered, focused: isFocused }"
    @mouseover="isHovered = true"
    @mouseout="isHovered = false"
    @focus="isFocused = true"
    @blur="isFocused = false"
    :disabled="disabled"
  >
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
      default: "primary",
      validator: (value) => ["primary", "warn", "danger"].includes(value),
    },
  },
  computed: {
    cssVars() {
      return {
        "--color": this.getColor().bg,
        "--hover-color": this.getColor().hoverBg,
        "--focus-color": this.getColor().focusBorder,
      };
    },
  },
  methods: {
    getColor() {
      switch (this.color) {
        case "warn":
          return { bg: "#ff5722", hoverBg: "#ff7043", focusBorder: "#ff8a65" }; // Red color
        case "danger":
          return { bg: "#e53935", hoverBg: "#ef5350", focusBorder: "#e57373" }; // Orange color
        default:
          return { bg: "#42b983", hoverBg: "#4cce93", focusBorder: "#47d696" }; // Default blue color for 'primary'
      }
    },
  },
  data() {
    return {
      isHovered: false,
      isFocused: false,
    };
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  margin: 5px;
  border-radius: 5px;
  background-color: var(--color);
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--hover-color);
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

button:disabled:hover {
  background-color: var(--color);
}

button.focused {
  outline: 2px solid;
  outline-color: var(--focus-color);
  border: 1px solid;
  border-color: white;
  /* outline-color: var(--color); */
  /*outline-style: lighten(var(--color, 20%));*/
}

/* Add other styles as needed */
</style>
