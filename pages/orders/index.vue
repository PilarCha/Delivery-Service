<template>
  <div class="">
    <h1 class = "mb-4">Orders Page</h1>
    <section>
      <v-card
        class="mb-4"
        :to="`/orders/${order.order_number}`"
        :key="order.order_number" v-for="order in orders"
      >
        <v-card-title>
          {{ order.order_number }}
        </v-card-title>

        <v-card-subtitle
          class="mb-2"
          style="display:inline"
          :key="order.items.index"
          v-for="item in order.items">{{ item }}
        </v-card-subtitle>

      </v-card>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          'order_number':'1',
          'order_total':'$100',
          'order_delivery_date': '4/20/2020',
          'order_status':'pending',
          items: ['Chicken','Apple','Pears'],
        },
        {
          'order_number':'2',
          'order_total':'$200',
          'order_delivery_date': '4/21/2020',
          'order_status':'pending',
          items: ['Beef','Celery','Nuts'],
        },
        {
          'order_number':'3',
          'order_total':'$130',
          'order_delivery_date': '4/22/2020',
          'order_status':'pending',
          items: ['Turkey','Carrots','Cereal'],
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
