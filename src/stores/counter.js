import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import countersData from "@/assets/counters.js";
 
export const useCounterStore = defineStore('counter', () => {
 
  // State
  const counters = ref(countersData);
 
  // Funtions
  function decrement(id) {
    let curCounter = counters.value.find((counter) => counter.id === id);
    curCounter.count--;
  }
 
  function increment(id) {
    let curCounter = counters.value.find((counter) => counter.id === id);
    curCounter.count++;
  }
 
  const getSum = computed(() => {
    let sum = 0;
    counters.value.forEach((counter) => (sum += counter.count));
    return sum;
  });
 
  return { counters, increment, decrement, getSum }
})