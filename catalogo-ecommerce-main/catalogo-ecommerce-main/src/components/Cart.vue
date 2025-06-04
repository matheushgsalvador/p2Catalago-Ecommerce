<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Carrinho</h2>
    <div v-if="cart.length === 0" class="text-gray-600">Seu carrinho está vazio.</div>

    <table v-else class="w-full border-collapse">
      <thead>
        <tr class="border-b">
          <th class="p-2 text-left">Produto</th>
          <th class="p-2 text-left">Quantidade</th>
          <th class="p-2 text-left">Preço Unitário</th>
          <th class="p-2 text-left">Subtotal</th>
          <th class="p-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id" class="border-b">
          <td class="p-2">{{ item.title }}</td>
          <td class="p-2">
            <input
              type="number"
              min="1"
              v-model.number="item.quantity"
              @change="updateQuantity(item)"
              class="w-16 border rounded px-1"
            />
          </td>
          <td class="p-2">${{ item.price }}</td>
          <td class="p-2">${{ (item.price * item.quantity).toFixed(2) }}</td>
          <td class="p-2">
            <button @click="removeItem(item)" class="text-red-600 hover:underline">
              Remover
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3" class="p-2 font-bold text-right">Total:</td>
          <td class="p-2 font-bold">${{ total.toFixed(2) }}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    cart: Array,
  },
  computed: {
    total() {
      return this.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    },
  },
  methods: {
    updateQuantity(item) {
      if (item.quantity < 1) {
        item.quantity = 1
      }
      this.$emit('update-cart', this.cart)
    },
    removeItem(item) {
      const index = this.cart.indexOf(item)
      if (index > -1) {
        this.cart.splice(index, 1)
        this.$emit('update-cart', this.cart)
      }
    },
  },
}
</script>
