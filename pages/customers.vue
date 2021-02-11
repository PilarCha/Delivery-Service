<template>
  <div class="">
    <h1 class = "mb-4">Customers</h1>
    <section>
      <v-card
        :to="`/customer/${customer.customer_id}`"
        :key="idx"
        v-for="(customer,idx) in data"
      >
        <v-card-title> {{ customer.name }} </v-card-title>
        <v-card-subtitle>{{ customer.name }}</v-card-subtitle>
      </v-card>
    </section>
  </div>
</template>

<script>

export default {

  computed: {
    getCustomers () {
      return this.$store.state.customers.data
    }
  }

}
</script>



<style lang="css" scoped>
</style>
