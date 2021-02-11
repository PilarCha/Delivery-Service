<template>
  <div class="">
    <h1 class = "mb-4">customers</h1>
    <section>
      <v-card
        :to="`/customer/${customer.customer_id}`"
        v-for="customer in customers"
        :key="customer.customer_id"
      >
        <v-card-title> {{ customer.customer_id }} </v-card-title>
        <v-card-subtitle>{{ customer.name }}</v-card-subtitle>
      </v-card>
    </section>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {

  computed: mapState(["customers"])

}
</script>



<style lang="css" scoped>
</style>

<!-- // data () {
//   return {
//     customers:[
//         {
//           customer_id: 1,
//           name:'Matt Peepee'
//         },
//         {
//           customer_id: 2,
//           name: 'Juan won one'
//         },
//         {
//           customer_id:3,
//           name:'Jumping Juniper'
//         },
//     ]
//   }
// } -->
