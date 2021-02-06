<template>
  <div class="">
    <h1>Order: {{ orderNumber }}</h1>
    <section>
      <h2>Details</h2>
    </section>
  </div>
</template>

<script>

export default {
  computed: {
    orderNumber() {
      return this.$route.params.order_number;
    }
  },
  components: {
  }
}
</script>
