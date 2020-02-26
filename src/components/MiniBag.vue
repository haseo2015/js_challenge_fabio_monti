<template>
  <div :class="['bag__mini-cart', params.store]" v-if="isVisible">
  <ul class="bag__mini-cart__list">
    <span class="bag__mini-cart__pointer"></span>
    <template v-if="items.length > 0">
      <li class="bag__mini-cart__item"
        v-for="(item, index) of items"
        :key="index">
          <button class="bag__mini-cart__button button button--round" @click="removeFrom(index)">&times;</button>
          <img class="bag__mini-cart__thumbnail" :src="item.cover_image_url + '?q=60&fit=crop&w=70&h=75'"  alt="Product" itemprop="image">
          <dl class="bag__mini-cart__item__description">
            <dt class="bag__mini-cart__item__title">{{item.title}}</dt>
            <dd class="bag__mini-cart__item__qty-price" v-if="params.store === 'cartItems'">1 X {{item.price.formatted_value}}</dd>
          </dl>
      </li>
    <li class="bag__mini-cart__item bag__mini-cart__subtotal" v-if="params.store === 'cartItems'">
      <dl class="bag__mini-cart__subtotal__description">
        <dt class="bag__mini-cart__subtotal__label">CART SUBTOTAL</dt>
        <dd class="bag__mini-cart__subtotal__value">{{subtotal.currency}}{{subtotal.value}}</dd>
      </dl>
    </li>
    </template>
    <template v-else>
      <li class="bag__mini-cart__item bag__mini-cart__item--empty">
        {{params.store === 'cartItems' ?'Carrello vuoto ' : 'Wishlist vuota'}}
      </li>
    </template>
  </ul>
  </div>
</template>

<script>
import eventBus from '@/eventBus'
export default {
  name: 'MiniBag',
  data: () => ({
    items: [],
    params: {},
    isVisible: false
  }),
  computed: {
    subtotal () {
      let _total = 0
      let _currency = '€'
      if (this.$store.state[this.params.store].length > 0) {
        const _tmp = this.$store.state[this.params.store].reduce((acc, curr) => acc + curr.price.value, 0)
        _currency = this.$store.state[this.params.store][0].price.currency
        _total += _tmp
      }
      return { value: parseFloat(_total).toFixed(2), currency: _currency }
    }
  },
  methods: {
    removeFrom (indexItem) {
      this.$store.dispatch('REMOVE_FROM', { position: this.params.store, index: indexItem })
    }
  },
  beforeMount () {
    const that = this
    eventBus.$on('showMiniBag', args => {
      that.params = args
      that.items = that.$store.state[args.store]
      that.isVisible = !that.isVisible
    })
  }
}
</script>
