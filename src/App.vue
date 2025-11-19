<script setup>
import { ref, computed } from "vue";
// import countersData from "@/assets/counters.js";
import { useCounterStore } from "@/stores/counterStore.js";
const counterStore = useCounterStore();

import CounterComp from "@/components/CounterComp.vue";
</script>

<template>
  <div class="counters">
    <h2>
      Sum of counters: <span>{{ counterStore.count}}</span>
    </h2>

    <CounterComp 
    @decrementCount="counterStore.decrement(counter.id)" 
    @incrementCount="counterStore.increment(counter.id)"
    v-for="counter in counterStore.counters" 
    :key="counter.id"
    >
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
