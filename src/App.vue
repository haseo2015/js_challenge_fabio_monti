<template>
  <div id="app">
    <Header />
    <main class="product-page">
      <div class="container">
      <List :items="products"/>
      </div>
    </main>
  </div>
</template>

<script>
import api from '@/api'
import List from '@/components/List'

export default {
  name: 'App',
  components: { List },
  data: () => ({
    products: []
  }),
  beforeMount () {
    api.getProducts().then(response => (this.products = response))
  }
}
</script>
