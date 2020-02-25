<template>
  <article class="product" itemscope="" itemtype="http://schema.org/Product">
    <figure class="product__image-wrapper">
        <img class="product__image" :src="attrs.cover_image_url" alt="Product" itemprop="image">
        <button class="product__wishlist-button button button--round button--wishlist" @click="addTo('whishlistItems')">
            <svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>Wishlist Icon</title>
                <polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon>
            </svg>
        </button>
    </figure>
    <div class="product__details">
        <h1 class="product__title" itemprop="brand">{{attrs.title}}</h1>
        <p class="product__subtitle" itemprop="description">{{attrs.description}}</p>
        <div class="product__price" itemscope="" itemtype="http://schema.org/Offer">
            <template v-if="attrs.discount > 0">
              <span class="product__price--strike">{{attrs.net_price.formatted_value}}</span><span class="product__price--discounted" itemprop="price" >{{ attrs.retail_price.formatted_value }}</span>
            </template>
            <template v-else>
              <span class="product__price" itemprop="price">{{ attrs.retail_price.formatted_value }}</span>
            </template>
        </div>
        <button :class="['product__add-to-cart', 'button', 'button--primary', {'button--in-cart': inCart}]" @click="addTo('cartItems')">{{inCart ? 'In Cart' : 'Add to Cart'}}</button>
    </div>
</article>
</template>

<script>
// import EventBus from '@/eventBus'
export default {
  name: 'Product',
  props: ['attrs'],
  data: () => ({
    miniProduct: {}
  }),
  computed: {
    productPrice () {
      return this.attrs.discount > 0
        ? this.attrs.net_price
        : this.attrs.retail_price
    },
    inCart () {
      return this.$store.state.cartItems.map(item => item.title === this.attrs.title)[0]
    }
  },
  methods: {
    addTo (where) {
      this.miniProduct = { ...this.miniProduct, title: this.attrs.title, price: this.productPrice, cover_image_url: this.attrs.cover_image_url }
      this.$store.dispatch('ADD_TO', { position: where, item: this.miniProduct })
    }
  }
}
</script>
