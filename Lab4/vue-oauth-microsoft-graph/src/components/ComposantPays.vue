<template>
  <div>
    <h1>{{ pays }}</h1>
    <button @click="choisir">Choisir</button>
  </div>
</template>

<script>
export default {
  props: ["pays"],
  setup(props, { emit }) {
    function choisir() {
      emit("choisir", props.pays);
    }

    return {
      choisir,
    };
  },
};
</script>
