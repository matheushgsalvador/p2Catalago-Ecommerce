<template>
  <aside class="p-4 border-r max-w-xs bg-sky-100 shadow-md rounded-md m-2" style="min-height: 100%;">
    <h2 class="font-bold mb-4">Categorias</h2>
    <ul>
      <li
        v-for="cat in categories"
        :key="cat.slug"
        @click="$emit('select-category', cat)"
        :class="['cursor-pointer mb-2 hover:text-blue-600', selectedCategory === cat ? 'font-bold text-blue-700' : '']"
      >
        {{ cat.name }}
      </li>
      <li
        class="cursor-pointer mt-4 text-red-600 hover:underline"
        @click="$emit('select-category', null)"
      >
        Limpar filtro
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'CategoryMenu',
  props: {
    categories: Array,
    selectedCategory: String,
  },
}
</script>
