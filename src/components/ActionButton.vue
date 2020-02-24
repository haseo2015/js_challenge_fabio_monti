<template>
  <div :class="['header-bag__item', ...params.additionalClasses]" @click="emitEvent(params.callback)">
    <div class="header-bag__price" v-if="params.totalPrice">
        {{ params.totalPrice }}
    </div>
    <div v-html="params.icon"></div>
    <span class="bag__item-counter" v-if="params.itemsCounter">{{ params.itemsCounter }}</span>
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
  methods: {
    emitEvent (cb) {
      eventBus.$emit(cb.name, cb.args)
    }
  }
}
</script>
