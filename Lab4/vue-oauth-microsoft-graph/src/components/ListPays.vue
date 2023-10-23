<template>
  <div>
    <div v-for="(pay, i) in pays" :key="i">
      <CopoPays :pays="pay" @choisir="setPays($event)" />
    </div>
    <h1>{{ paysChoisi }}</h1>
  </div>
</template>

<script>
import CopoPays from "./ComposantPays.vue";
import { ref } from "vue";

export default {
  components: {
    CopoPays,
  },
  setup() {
    const pays = ["France", "Belgique", "Suisse", "Espagne"];

    const paysChoisi = ref("");

    function setPays(e) {
      paysChoisi.value = e;
    }

    return {
      pays,
      setPays,
      paysChoisi,
    };
  },
};
</script>
