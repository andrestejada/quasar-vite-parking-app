import { defineStore } from 'pinia'

const CounterStore = defineStore('counter', {
  // arrow function recommended for full type inference
  state: () =>({
    counter:0
  }),
  actions:{
    dobleCount(){
      this.counter = this.counter * 2
    }
  }
})

export default CounterStore
