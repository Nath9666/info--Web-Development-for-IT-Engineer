<template>
  <base-button
    :disabled="isPending"
    :color="color"
    @click.stop.prevent="handleClick"
  >
    <span v-if="isPending">Loading ...</span>
    <slot />
  </base-button>
</template>

<script>
import BaseButton from "./baseButton.vue";

export default {
  name: "AsyncButton",
  components: { BaseButton },
  inheritAttrs: false,

  props: {
    color: {
      type: String,
      default: "primary",
    },
  },

  data() {
    return {
      isPending: false,
    };
  },

  methods: {
    handleClick() {
      setTimeout(() => {
        this.isPending = !this.isPending;
      }, 2000);
      this.isPending = !this.isPending;
    },
  },
};
</script>
