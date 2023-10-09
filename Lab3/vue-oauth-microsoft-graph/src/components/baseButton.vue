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
          return "#ff552f"; // Red color
        case "danger":
          return "#ee373b"; // Orange color
        default:
          return "#29b883"; // Default blue color for 'primary'
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
  background-color: darken(var(--color), 10%);
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
  outline-color: var(--color);
  border: 1px solid;
  border-color: white;
  /* outline-color: var(--color); */
  /*outline-style: lighten(var(--color, 20%));*/
}

/* Add other styles as needed */
</style>
