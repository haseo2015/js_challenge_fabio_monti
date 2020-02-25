<template>
  <div :class="['header-bag__item', ...params.additionalClasses]" @click="emitEvent(params.callback)">
    <div class="header-bag__price" v-if="params.withTotal && total.value > 0">
        {{ total.value }} {{ total.currency }}
    </div>
    <div v-html="params.icon"></div>
    <span class="bag__item-counter" v-if="params.store">{{ $store.state[params.store].length }}</span>
</div>
</template>

<script>
import eventBus from '@/eventBus'
export default {
  name: 'ActionButton',
  props: {
    params: {
      required: true
    }
  },
  computed: {
    total () {
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
    emitEvent (cb) {
      eventBus.$emit(cb.name, cb.args)
    }
  }
}
</script>
