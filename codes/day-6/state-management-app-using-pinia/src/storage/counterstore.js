import { defineStore } from "pinia";
import { computed, ref } from "vue";

//options api style
// export const counterStore = defineStore(
//     "counterstore",
//     {
//         // state: () => {

//         // }
//         state() {
//             return {
//                 counter: 0
//             }
//         },
//         actions: {
//             increase() {
//                 this.counter++
//             },
//             decrease() {
//                 this.counter--;
//             }
//         },
//         getters: {
//             doubleUpCounter() {
//                 return this.counter * 2
//             }
//         }
//     }
// )

//composition api style

export const counterStore = defineStore(
    "sounterstore",
    () => {
        //state properties
        const counter = ref(0)

        //getters
        const doubleUpCounter = computed(() => counter.value * 2)

        //actions
        const increase = () => counter.value++
        const decrease = () => counter.value--

        return {
            //state
            counter: counter,
            //getter
            doubleUpCounter: doubleUpCounter,
            //actions
            increase: increase,
            decrease: decrease
        }
    }
)