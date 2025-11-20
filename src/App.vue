<script setup>
import { ref, computed } from "vue";
import { useCounterStore } from "@/stores/counter.js";
const counterStore = useCounterStore();
import CounterComp from "@/components/CounterComp.vue";
</script>

<template>
  <div class="counters">
    <h2>
      Sum of counters: <span>{{ counterStore.getSum }}</span>
    </h2>

    <CounterComp v-for="counter in counterStore.counters" :key="counter.id" :counter="counter">
    </CounterComp>
  </div>
</template>

<style scoped>
.counters {
  width: 200px;
  margin: 0 auto;
}

h2 {
  text-align: center;
}

h2 span {
  font-size: 3rem;
}
</style>
