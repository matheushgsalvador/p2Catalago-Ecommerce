<template>
  <div class="max-w-4xl mx-auto p-4">
    <Cart
      :cart="cart"
      @update-cart="updateCart"
    />
  </div>
</template>

<script>
import Cart from '../components/Cart.vue'

export default {
  name: 'CartView',
  components: { Cart },
  data() {
    return {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    }
  },
  methods: {
    updateCart(newCart) {
      this.cart = newCart
      localStorage.setItem('cart', JSON.stringify(this.cart))
    },
  },
}
</script>
