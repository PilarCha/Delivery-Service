<template>
  <div class="">
    <v-alert
      v-if= "cancelled"
      text
      prominent
      type="error"
    >
      This order was Cancelled
    </v-alert>

    <h1>Order: {{ orderNumber }}</h1>
    <section v-if="!cancelled">
      <v-row
        class="mt-2 ml-3"
      >
        <v-btn
          color="primary"
        > Deliver
        </v-btn>
        <v-btn
          class="ml-3"
          color="error"
          @click="dialog = true"
        > Cancel Order
        </v-btn>
      </v-row>
    </section>
    <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card>
        <v-card-title class="headline yellow darken-2">
           Are you sure?
        </v-card-title>

        <v-card-text class="mt-2">
          Caneling the order with result in the order being changed from pending to Cancelled.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="cancelOrder()"
          >
            I accept
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            Nevermind
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dialog: false,
      cancelled:false
    }
  },
  methods: {
    cancelOrder () {
      this.dialog=false;
      this.cancelled = true;
    }
  },
  computed: {
    orderNumber() {
      return this.$route.params.order_number;
    }
  },
  components: {
  }
}
</script>
