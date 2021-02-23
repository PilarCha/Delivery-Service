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
            <v-select :items="driverOptions"/>

            <v-btn
              color="primary"
              @click="steps = 2"
            >
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn
              color="primary"
              @click="steps = 3"
            >
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn
              color="primary"
              @click="steps = 1"
            >
              Continue
            </v-btn>

            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </section>
  </div>
</template>

<script>
export default {
  data ()  {
    return {
      steps: 1,
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>
