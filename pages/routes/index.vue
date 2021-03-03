<template>
  <div class="">
    <h1 class="mb-4">Routes page</h1>
    <section>
      <v-stepper v-model="steps">
        <!-- Header -->
        <v-stepper-header>
          <v-stepper-step
            :complete="steps > 1"
            step="1"
          >
            Select Driver
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            :complete="steps > 2"
            step="2"
          >
            Select Orders
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">
            Confirm
          </v-stepper-step>
        </v-stepper-header>

        <!-- Steps -->
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-select
              v-model = "selectedDriver"
              :items="driverOptions"
              placeholder="Select Driver"
            />

            <v-btn
              color="primary"
              @click="steps = 2"
            >
              Continue
            </v-btn>

          </v-stepper-content>

          <v-stepper-content step="2">
            <v-select
              v-model="selectedOrders"
              :items="orderOptions"
              placeholder="Select Order"
              multiple
            />

            <v-btn
              color="primary"
              @click="steps = 3"
            >
              Continue
            </v-btn>

            <v-btn
              color="warning"
              @click="steps = 1"
            >
              Select Driver
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <h2> {{ selectedDriver }}</h2>
            <ul>
              <li v-for="order in selectedOrders"> {{ order }}</li>
            </ul>

            <v-btn
              color="primary"
              @click="confirmRoutes(), steps = 1"
            >
              Confirm
            </v-btn>

            <v-btn
              color="warning"
              @click="steps = 2"
            >
              Select Orders
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </section>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="success"
      outlined
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          outlined
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data ()  {
    return {
      confirmed: false,
      selectedDriver:null,
      selectedOrders: null,
      steps: 1,
      snackbar: false,
      text: 'Driver has been assigned routes',
      timeout:2000
    }
  },
  methods: {
    confirmRoutes() {
      this.snackbar = true;
    }
  },
  computed: {
    drivers () {
      return this.$store.state.drivers.data
    },
    driverOptions() {
      return this.drivers.map((driver) => {
        return {
          text:driver.name,
          value:driver.driver_id
        }
      })
    },
    orders () {
      return this.$store.state.orders.data
    },
    orderOptions() {
      return this.orders.map(( order ) => {
        return {
          text: order.order_id,
          value: order.order_id
        }
      })
    },
  }
}
</script>

<style lang="css" scoped>
</style>
