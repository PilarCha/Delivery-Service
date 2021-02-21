<template>
  <div class="">
    <h1 class="mb-4">Driver Name: {{ driverId.name }}</h1>
    <section>
      <v-card>
        <v-card-title> Hello, world </v-card-title>
        <v-card-subtitle>Subtitle</v-card-subtitle>
      </v-card>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    driverId () {
      let driverId = this.$route.params.driver_id;
      return this.$store.state.drivers.data.find(driver => driver.driver_id == driverId)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
