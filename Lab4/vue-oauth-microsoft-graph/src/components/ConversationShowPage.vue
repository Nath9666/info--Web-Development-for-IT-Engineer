<template>
  <div>
    <h1>Conversation Details</h1>
    <p>Conversation ID: {{ conversationId }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"], // This is where the route param will be passed as a prop
  computed: {
    conversationId() {
      return this.id;
    },
  },
};
</script>
