<template>
  <div class="">
    <h1 class = "mb-4">Customer Name: {{ customerId.name }}</h1>
    <section>
      <v-card
        class = "mb-2"
      >
        <v-card-title>  </v-card-title>
      </v-card>
    </section>
  </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    customerId () {
      let custId = this.$route.params.customer_id
      return this.$store.state.customers.data.find(customer => customer.customer_id == custId)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
