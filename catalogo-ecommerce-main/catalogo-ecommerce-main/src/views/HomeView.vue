<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-slate-100 text-gray-800">
    <CategoryMenu
      :categories="categories"
      :selectedCategory="selectedCategory"
      @select-category="filterByCategory"
      class="w-full md:w-4/5 p-4"
    />

    <main class="flex-1 p-6 bg-white shadow rounded-lg m-4">
      <SearchBar @search="searchProducts" />

      <SortSelect @sort="sortProducts" />

      <ProductGrid
        :products="paginatedProducts"
        @add-to-cart="addToCart"
      />

      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @change-page="changePage"
      />
    </main>
  </div>
</template>

<script>
import api from '../services/api'
import CategoryMenu from '../components/CategoryMenu.vue'
import SearchBar from '../components/SearchBar.vue'
import SortSelect from '../components/SortSelect.vue'
import ProductGrid from '../components/ProductGrid.vue'
import Pagination from '../components/Pagination.vue'

export default {
  name: 'HomeView',
  components: { CategoryMenu, SearchBar, SortSelect, ProductGrid, Pagination },
  data() {
    return {
      products: [],
      filteredProducts: [],
      categories: [],
      selectedCategory: null,
      searchTerm: '',
      sortOption: '',
      currentPage: 1,
      perPage: 12,
      cart: JSON.parse(localStorage.getItem('cart')) || [],
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredProducts.length / this.perPage)
    },
    paginatedProducts() {
      const start = (this.currentPage - 1) * this.perPage
      return this.filteredProducts.slice(start, start + this.perPage)
    },
  },
  methods: {
    async fetchProducts() {
      const response = await api.get('/products')
      this.products = response.data.products
      this.filteredProducts = this.products
    },
    async fetchCategories() {
      const response = await api.get('/products/categories')
      this.categories = response.data
    },
    filterByCategory(category) {
      this.selectedCategory = category
      this.currentPage = 1
      this.applyFilters()
    },
    searchProducts(term) {
      this.searchTerm = term.toLowerCase()
      this.currentPage = 1
      this.applyFilters()
    },
    sortProducts(option) {
      this.sortOption = option
      this.applyFilters()
    },
    applyFilters() {
      let result = this.products

      if (this.selectedCategory) {
        result = result.filter(p => p.category === this.selectedCategory)
      }

      if (this.searchTerm) {
        result = result.filter(p =>
          p.title.toLowerCase().includes(this.searchTerm)
        )
      }

      if (this.sortOption) {
        const [field, direction] = this.sortOption.split('-')
        result = result.slice().sort((a, b) => {
          if (field === 'price') {
            return direction === 'asc' ? a.price - b.price : b.price - a.price
          } else if (field === 'name') {
            if (a.title < b.title) return direction === 'asc' ? -1 : 1
            if (a.title > b.title) return direction === 'asc' ? 1 : -1
            return 0
          }
          return 0
        })
      }

      this.filteredProducts = result
    },
    changePage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page
      }
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
  async mounted() {
    await this.fetchProducts()
    await this.fetchCategories()
  },
}
</script>
