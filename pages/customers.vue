<template>
  <div class="">
    <h1 class = "mb-4">customers</h1>
    <section>
      <v-card>
        <v-card-title> Hello, world </v-card-title>
        <v-card-subtitle>Subtitle</v-card-subtitle>
      </v-card>
    </section>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {

  computed: mapState(["customers"]),
  
}
</script>



<style lang="css" scoped>
</style>
