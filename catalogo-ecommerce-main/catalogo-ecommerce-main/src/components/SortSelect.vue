<template>
  <select
    v-model="sortOption"
    @change="$emit('sort', sortOption)"
    class="border rounded px-3 py-2 mb-4"
  >
    <option value="">Ordenar por</option>
    <option value="price-asc">Preço: Crescente</option>
    <option value="price-desc">Preço: Decrescente</option>
    <option value="name-asc">Nome: A-Z</option>
    <option value="name-desc">Nome: Z-A</option>
  </select>
</template>

<script>
export default {
  name: 'SortSelect',
  data() {
    return {
      sortOption: '',
    }
  },
}
</script>
