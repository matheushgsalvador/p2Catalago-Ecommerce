<template>
  <div class="flex justify-center space-x-2 my-4">
    <button
      @click="$emit('change-page', currentPage - 1)"
      :disabled="currentPage <= 1"
      class="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
    >
      Anterior
    </button>
    <button
      v-for="page in totalPages"
      :key="page"
      @click="$emit('change-page', page)"
      :class="['px-3 py-1 rounded', page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200']"
    >
      {{ page }}
    </button>
    <button
      @click="$emit('change-page', currentPage + 1)"
      :disabled="currentPage >= totalPages"
      class="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
    >
      Próximo
    </button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: Number,
    totalPages: Number,
  },
}
</script>
