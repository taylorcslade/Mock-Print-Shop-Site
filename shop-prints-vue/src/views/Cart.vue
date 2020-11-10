<template>
<div>
  <h1><em><strong> Your Cart: </strong></em></h1>
  <p v-if="this.$root.$data.cart.length == 0"> There are no items in your cart </p>
  <CartList :prints="cart" />
</div>
</template>

<script>
import CartList from "../components/Cartlist.vue"
export default {
  name: 'Browse',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  h1{
    padding: 40px 0 27px 40px;
    Font-Family: 'Playfair Display', Serif;
    Font-Size: 40px;
    color: #92aca6;
  }
  p{
    padding: 0px 0 20px 70px;
    Font-size:20px;
  }

</style>
