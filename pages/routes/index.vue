<template>
  <div class="">
    <h1 class="mb-4">Routes page</h1>
    <section>
      <v-stepper v-model="steps">
        <v-stepper-header>
          <v-stepper-step
            :complete="steps > 1"
            step="1"
          >
            Name of step 1
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            :complete="steps > 2"
            step="2"
          >
            Name of step 2
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">
            Name of step 3
          </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

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
  }
}
</script>

<style lang="css" scoped>
</style>
