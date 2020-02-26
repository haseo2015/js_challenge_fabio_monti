<template>
  <ul class="product-list">
    <li class="product-list__item" v-for="(item, index) of items" :key="index">
      <Product :attrs="item" />
    </li>
  </ul>
</template>

<script>
/**
 * @component List
 * @prop items - the list of produtcs
 */
export default {
  name: 'ItemList',
  props: ['items']
}
</script>
