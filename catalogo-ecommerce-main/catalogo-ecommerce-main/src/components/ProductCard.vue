<template>
  <div class="border rounded shadow hover:shadow-lg p-4 flex flex-col">
    <img :src="product.thumbnail" :alt="product.title" class="w-full h-48 object-cover mb-2 rounded" />
    <h3 class="font-semibold text-lg mb-1 bg-blue-100 p-1 rounded">{{ product.title }}</h3>
    <p class="text-sm text-gray-600 mb-1 capitalize">{{ product.category }}</p>
    <p class="text-green-700 font-bold mb-1">${{ product.price }}</p>
    <p class="text-sm mb-2" :class="product.stock > 0 ? 'text-green-600' : 'text-red-600'">
      {{ product.stock > 0 ? 'Em estoque' : 'Indisponível' }}
    </p>
    <button
      @click="$emit('add-to-cart', product)"
      :disabled="product.stock === 0"
      class="w-full mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
    >
      Adicionar ao Carrinho
    </button>
    <router-link
      :to="`/product/${product.id}`"
      class="mt-2 text-center text-blue-500 hover:underline"
    >
      Ver detalhes
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object,
  },
}
</script>
