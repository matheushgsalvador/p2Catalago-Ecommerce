<template>
  <div class="max-w-4xl mx-auto p-4">
    <button @click="$router.back()" class="mb-4 text-blue-600 hover:underline">Voltar</button>

    <div v-if="product" class="flex flex-col md:flex-row gap-6">
      <img
        :src="product.images[0]"
        :alt="product.title"
        class="w-full md:w-1/2 h-64 object-cover rounded"
      />
      <div class="md:w-1/2 flex flex-col">
        <h1 class="text-2xl font-bold mb-2">{{ product.title }}</h1>
        <p class="text-gray-700 mb-2">{{ product.description }}</p>
        <p class="font-bold text-xl text-green-700 mb-2">${{ product.price }}</p>
        <p class="mb-4" :class="product.stock > 0 ? 'text-green-600' : 'text-red-600'">
          {{ product.stock > 0 ? 'Em estoque' : 'Indisponível' }}
        </p>
        <button
          @click="addToCart(product)"
          :disabled="product.stock === 0"
          class="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
    <p v-else>Carregando...</p>
  </div>
</template>

<script>
import api from '../services/api'

export default {
  name: 'ProductDetailView',
  props: ['id'],
  data() {
    return {
      product: null,
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    }
  },
  methods: {
    async fetchProduct() {
      const response = await api.get(`/products/${this.id}`)
      this.product = response.data
    },
    addToCart(product) {
      const item = this.cart.find(i => i.id === product.id)
      if (item) {
        item.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      localStorage.setItem('cart', JSON.stringify(this.cart))
      alert(`${product.title} adicionado ao carrinho!`)
    },
  },
  mounted() {
    this.fetchProduct()
  },
}
</script>
