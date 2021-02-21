<template>
  <div class="">
    <h1 class = "mb-4">Drivers</h1>
    <section>
      <v-card
        class = "mb-2"
        :to="`/drivers/${driver.driver_id}`"
        :key="index"
        v-for="(driver,index) in drivers"
      >
        <v-card-title> {{ driver.name }} </v-card-title>
      </v-card>
    </section>
  </div>
</template>

<script>

export default {

  computed: {
    drivers () {
      return this.$store.state.drivers.data
    }
  }

}
