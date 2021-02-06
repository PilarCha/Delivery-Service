<template>
  <div class="">
    <h1>Order Number</h1>
    {{ orderNumber }}
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
