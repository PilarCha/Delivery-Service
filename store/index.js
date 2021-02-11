import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);
// const customers = {
//   state: () => ({
//     data: [
//       {
//         customer_id: 1,
//         name:'Matt Peepee'
//       },
//       {
//         customer_id: 2,
//         name: 'Juan won one'
//       },
//       {
//         customer_id:3,
//         name:'Jumping Juniper'
//       },
//     ]
//   }),
//   mutations:{},
//   actions: {},
//   getters: {},
// }
//
// const drivers = {
//   state: () => ({
//
//   }),
//   mutations:{},
//   actions: {},
//   getters: {},
// }
//
// const orders = {
//   state: () => ({
//
//   }),
//   mutations:{},
//   actions: {},
//   getters: {},
// }

export const store = new Vuex.Store({
  state: {
    customers:[
        {
          customer_id: 1,
          name:'Matt Peepee'
        },
        {
          customer_id: 2,
          name: 'Juan won one'
        },
        {
          customer_id:3,
          name:'Jumping Juniper'
        },
    ]
  }
})
