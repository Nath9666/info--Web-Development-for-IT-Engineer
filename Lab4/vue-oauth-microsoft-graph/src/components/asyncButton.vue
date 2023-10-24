<template>
  <base-button :disabled="isPending" :color="color" @click="handleClick">
    <span v-if="isPending">Loading ...</span>
    <slot />
  </base-button>
</template>

<script>
import BaseButton from "./base/baseButton.vue";

export default {
  name: "AsyncButton",
  components: { BaseButton },
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: "primary",
    },
    initialTimer: {
      type: Number,
      default: 2000,
    },
  },

  data() {
    return {
      isPending: false,
      timer: this.initialTimer,
    };
  },

  methods: {
    handleClick() {
      console.log("Async button clicked", this.timer);

      // Create a new promise with the current timer value
      const asyncOperation = new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, this.timer);
      });

      // Update timer for the next click
      this.timer += 1000;

      // Toggle isPending when promise resolves
      asyncOperation.then(() => {
        this.isPending = !this.isPending;
      });

      // Toggle isPending immediately
      this.isPending = !this.isPending;
    },
  },
};
</script>
