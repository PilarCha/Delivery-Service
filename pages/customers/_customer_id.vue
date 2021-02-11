<template>
  <div class="">
    <h1 class = "mb-4">Customer ID: {{ customerId }}</h1>
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
export default {
  computed: {
    customerId () {
      return this.$route.params.customer_id;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
