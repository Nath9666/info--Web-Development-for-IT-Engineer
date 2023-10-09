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
        "--color": this.getColor(),
      };
    },
  },
  methods: {
    getColor() {
      switch (this.color) {
        case "warn":
          return "#e74c3c"; // Red color
        case "danger":
          return "#f39c12"; // Orange color
        default:
          return "#42b983"; // Default blue color for 'primary'
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
  border-radius: 5px;
  background-color: var(--color);
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: darken(var(--color), 10%);
}

button:disabled {
  cursor: not-allowed;
}

button:disabled:hover {
  background-color: var(--color);
}

button.focused {
  outline: 2px solid rgba(52, 152, 219, 0.8);
  /* Adjust the outline color as needed */
}

/* Add other styles as needed */
</style>
