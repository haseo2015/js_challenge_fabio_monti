<template>
  <header class="header container">
    <h1 class="page-title">BRAND</h1>
    <aside class="header-bag">
        <ActionButton
          v-for="button of buttons"
          :key="button.name"
          :params="button" />
        <MiniBag />
    </aside>
  </header>
</template>

<script>
/**
 * @component Header
 * @data buttons configurations
 */
export default {
  name: 'Header',
  data: () => ({
    buttons: [
      {
        name: 'addToCart',
        store: 'cartItems',
        withTotal: true,
        additionalClasses: ['header-bag__count'],
        icon: '<svg class="icon" width="17px" height="18px" viewBox="36 8 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-if="params.icon"><title>Bag Icon</title><path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fill-rule="evenodd"></path></svg>',
        callback: {
          name: 'showMiniBag',
          args: {
            store: 'cartItems'
          }
        }
      },
      {
        name: 'addToWhisList',
        store: 'wishlistItems',
        withTotal: false,
        additionalClasses: ['header-bag__wishlist-count'],
        icon: '<svg class="icon" width="20px" height="20px" viewBox="0 6 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Wishlist Icon</title><polygon id="Wishlist-Icon" stroke="none" fill-rule="evenodd" points="12.3598869 13.2675869 20 13.2675869 13.8200565 17.7545318 16.1782804 25.0221187 9.99833694 20.5318477 3.81839348 25.0221187 6.17994346 17.7545318 0 13.2675869 7.63678696 13.2675869 9.99833694 6"></polygon></svg>',
        callback: {
          name: 'showMiniBag',
          args: {
            store: 'wishlistItems'
          }
        }
      }
    ]
  })
}
</script>
