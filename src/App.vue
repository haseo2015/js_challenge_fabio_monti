<template>
  <div id="app">
    <Header />
    <main class="product-page">
      <div class="container">
        <List :items="products"/>
        <Pagination
          :pages="pages" />
      </div>
    </main>
  </div>
</template>

<script>
/**
 * @component App
 * @method getProducts @param str (the string to be appended to the url) @returns Object
 * @beforeMount listen to the CHANGE_PAGE event to get the new product
 * @mounted get all the products to init the pagination components and sets the firsts products
 */
import api from '@/api'
import List from '@/components/List'
import eventBus from '@/eventBus'
export default {
  name: 'App',
  components: { List },
  data: () => ({
    pages: 0,
    size: 6,
    products: []
  }),
  methods: {
    async getProducts (str) {
      await api.getProducts(str).then(response => (this.products = response))
    }
  },
  beforeMount () {
    const that = this
    eventBus.$on('CHANGE_PAGE', offset => {
      that.getProducts('?limit=6&offset=' + offset)
    })
  },
  async mounted () {
    await this.getProducts()
    this.pages = Math.round(this.products.length / this.size)
    this.products = this.products.slice(0, this.size)
  }
}
</script>
