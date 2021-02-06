<template>
  <div class="">
    <h1>Orders Page</h1>
    <section>
      <v-card>
        <v-cart-title> Hello, world </v-cart-title>
        <v-card-subtitle>Subtitle</v-card-subtitle>
      </v-card>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    orders: [
      {
        'order_number':'123'
      }
    ]
  }
}
</script>

<style lang="css" scoped>
</style>
