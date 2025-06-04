<template>
  <input
    type="text"
    v-model="searchTerm"
    @input="$emit('search', searchTerm)"
    placeholder="Buscar produtos..."
    class="border rounded px-3 py-2 w-full mb-4"
  />
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchTerm: '',
    }
  },
}
</script>
