<template>
  <div class="">
    <h1 class = "mb-4">Orders Page</h1>
    <section>
      <v-card
        class="mb-4"
        :to="`/orders/${order.order_id}`"
        specificOrder="`orders${order.order_id}`"
        :key="order.order_id" v-for="order in orders"
      >
        <v-card-title>
          {{ order.order_id }}
        </v-card-title>

        <v-btn
          color="primary"
          class="mr-2 mb-2 ml-2"
          :key="order.items.index"
          v-for="item in order.items"
        >
          {{ item }}
        </v-btn>
      </v-card>
    </section>
  </div>
</template>

<script>
export default {

  computed: {
    orders () {
      return this.$store.state.orders.data
    }
  }

}
</script>

<style lang="css" scoped>
</style>
