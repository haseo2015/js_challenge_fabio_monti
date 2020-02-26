<template>
  <nav class="pagination">
    <ul class="pagination__list">
        <li class="pagination__item">
            <a href="#" class="pagination__link" v-if="offset > 0" @click="changePage(offset - 1)">
                <svg class="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Arrow Left</title>
                    <polygon id="Left-Icon" stroke="none" fill-rule="evenodd" transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) " points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                </svg>
            </a>
        </li>
        <li class="pagination__item"
          v-for="i in 5" :key="i">
            <a href="#"
            :class="['pagination__link', {'active': offset === i-1}]"
            @click="changePage(i - 1)">{{i}}</a>
        </li>
        <template v-if="offset+5 < pages ">
          <li class="pagination__item" >
            <a href="#"
              class="pagination__link"
              >...</a>
          </li>
          <li class="pagination__item" v-if="offset < pages ">
            <a href="#"
              :class="['pagination__link', {'active': offset === pages-1}]"
              @click="changePage(pages - 1)"
              >{{pages}}</a>
          </li>
        </template>
        <li class="pagination__item" v-if="offset < pages"  @click="changePage(offset + 1)">
            <a href="#" class="pagination__link">
                <svg class="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>Arrow Right</title>
                    <polygon id="Left-Iocn" stroke="none" fill-rule="evenodd" points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
                </svg>
            </a>
        </li>
    </ul>
  </nav>
</template>

<script>
/**
 * @component Pagination
 * @prop pages:Number
 * @method changePage (pointer) - switch the pointer of the pagination and emit the event CHANGE_PAGE
 * @test Pagination.spec.js
 */

import eventBus from '@/eventBus'
export default {
  name: 'Pagination',
  data: () => ({
    offset: 0
  }),
  props: {
    pages: {
      type: Number,
      default: 1
    }
  },
  methods: {
    changePage (pointer) {
      this.offset = pointer
      eventBus.$emit('CHANGE_PAGE', pointer)
    }
  }
}
</script>
