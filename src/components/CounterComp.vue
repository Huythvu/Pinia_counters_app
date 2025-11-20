<script setup>
const props = defineProps({counter: Object});
import { useCounterStore } from "@/stores/counter.js";
const store = useCounterStore();

</script>

<template>
  <div class="counter-parent">
    <button @click="store.decrement(counter.id)">-</button>
    <div class="counter" :style="{backgroundColor: counter.color}">
      {{ counter.count }}
    </div>
    <button @click="store.increment(counter.id)">+</button>
  </div>
</template>

<style scoped>
.counter-parent {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.counter {
  margin: 1rem;
  width: 100px;
  border-radius: 10px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  aspect-ratio: 1 / 1;
  box-shadow: 3px 14px 17px -11px rgba(0, 0, 0, 0.59);
  -webkit-box-shadow: 3px 14px 17px -11px rgba(0, 0, 0, 0.59);
  -moz-box-shadow: 3px 14px 17px -11px rgba(0, 0, 0, 0.59);
}
button {
  border-radius: 8px;
  /* background: rgba(255, 255, 255, 0.2); */
  background: transparent;
  border: none;
  box-shadow: 0px 0px 0px #d9d9d9, -0px -0px 0px #e7e7e7;
  aspect-ratio: 1 / 1;
  width: 50px;
  transition: 0.3s all;
  color: rgb(149, 149, 241);
  font-size: 1.2rem;
  cursor: pointer;
}

button:hover {
  box-shadow: 8px 8px 16px #d0d0d0, -8px -8px 16px #f0f0f0;
}
</style>
