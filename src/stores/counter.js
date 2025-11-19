import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

// // State

// // Funtions
// function decrement(id) {
//   let curCounter = count.value.find((counter) => counter.id === id);
//   curCounter.count--;
// }

// function increment(id) {
//   let curCounter = count.value.find((counter) => counter.id === id);
//   curCounter.count++;
// }

// const getSum = computed(() => {
//   let sum = 0;
//   count.value.forEach((count) => (sum += count.count));
//   return sum;
// });

  return { count, doubleCount, increment, decrement}
})

