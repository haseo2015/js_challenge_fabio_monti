<template>
  <div>Product</div>
</template>

<script>
// import EventBus from '@/eventBus'
export default {
  name: 'Product',
  props: ['agrs'],
  data: () => ({
    title: 'Sample Product',
    cover_image_url: '',
    description: '',
    net_price: 0,
    retail_price: 0,
    discount: 0
  })
}
</script>
