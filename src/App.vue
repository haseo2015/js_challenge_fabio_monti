<template>
  <div id="app">
   <Header />
  </div>
</template>

<script>
import eventBus from '@/eventBus'
export default {
  name: 'App',
  beforeMount () {
    eventBus.$on('showMiniBag', () => {
      console.log('showMiniBag')
    })
    eventBus.$on('showMiniWhishlist', () => {
      console.log('showMiniWhishlist')
    })
  }
}
</script>
