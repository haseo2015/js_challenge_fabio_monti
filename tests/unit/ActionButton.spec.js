import { shallowMount } from '@vue/test-utils'
import ActionButton from '@/components/ActionButton'

describe('ActionButton Component test', () => {

  const wrapper = shallowMount(ActionButton, {
    mocks: {
      $store: {
        state: { 
          cartItems: [],
          wishlistItems: [] }
      }
    },
    propsData: {
      params: {
        name: 'addToCart',
        store: 'cartItems',
        withTotal: true,
        additionalClasses: ['header-bag__wishlist-count'],
        icon: '<svg class="icon" width="17px" height="18px" viewBox="36 8 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-if="params.icon"><title>Bag Icon</title><path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fill-rule="evenodd"></path></svg>',
        callback: {
          name: 'showMiniBag'
        }
      }
    }
  });

  it('should mount correctly the ActionButton component', () => {
    expect(wrapper.find('.header-bag__item').exists()).toBe(true)
  });

  it('should show the correct amount', () => {
    const wrapper = shallowMount(ActionButton, {
      mocks: {
        $store: {
          state: { 
            cartItems: [
              {
                cover:"https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg",
                price: {
                  currency:"EUR",
                  formatted_iso_value:"28,00 €",
                  formatted_value:"€ 28.00",
                  value:28
                },
                title:"Tour salta fila per piccoli gruppi ai Musei Vaticani"
              },
              {
                cover:"https://images.musement.com/cover/0079/95/thumb_7894944_cover_header.jpeg",
                price: {
                  currency:"EUR",
                  formatted_iso_value:"44,00 €",
                  formatted_value:"€ 44.00",
                  value:44
                },
                title:"OMNIA Roma Pass 72 ore con trasporto in bus turistico",
              }
            ],
            whishlistItems: [] }
        }
      },
      propsData: {
        params: {
          name: 'addToCart',
          store: 'cartItems',
          withTotal: true,
          additionalClasses: ['header-bag__wishlist-count'],
          icon: '<svg class="icon" width="17px" height="18px" viewBox="36 8 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-if="params.icon"><title>Bag Icon</title><path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fill-rule="evenodd"></path></svg>',
          callback: {
            name: 'showMiniBag'
          }
        }
      }
    });
    expect(wrapper.find('.header-bag__price').text()).toBe("72.00 EUR")
  })

  it('should not show total if the withTotal is false', () => {
    const wrapper = shallowMount(ActionButton, {
      mocks: {
        $store: {
          state: { 
            cartItems: [],
            whishlistItems: [] }
        }
      },
      propsData: {
        params: {
          name: 'addToCart',
          store: 'cartItems',
          withTotal: false,
          additionalClasses: ['header-bag__wishlist-count'],
          icon: '<svg class="icon" width="17px" height="18px" viewBox="36 8 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-if="params.icon"><title>Bag Icon</title><path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fill-rule="evenodd"></path></svg>',
          callback: {
            name: 'showMiniBag'
          }
        }
      }
    });
    expect(wrapper.find('.header-bag__price').exists()).toBe(false)
  });

  it('should show counter with zero if is empty', () => {
    expect(wrapper.find('.bag__item-counter').text()).toBe("0")
  });

  it('should show counter and its value when counter is greater than 0', () => {
    expect.assertions(2);
    const wrapper = shallowMount(ActionButton, {
      mocks: {
        $store: {
          state: { 
            cartItems: [
              {
                cover:"https://images.musement.com/cover/0002/37/thumb_136037_cover_header.jpeg",
                price:44.9,
                title:"Tour salta fila per piccoli gruppi ai Musei Vaticani"
              },
              {
                cover:"https://images.musement.com/cover/0079/95/thumb_7894944_cover_header.jpeg",
                price:113,
                title:"OMNIA Roma Pass 72 ore con trasporto in bus turistico",
              }
            ],
            whishlistItems: [] }
        }
      },
      propsData: {
        params: {
          name: 'addToCart',
          store: 'cartItems',
          additionalClasses: ['header-bag__wishlist-count'],
          icon: '<svg class="icon" width="17px" height="18px" viewBox="36 8 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" v-if="params.icon"><title>Bag Icon</title><path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="Bag-Icon" stroke="none" fill-rule="evenodd"></path></svg>',
          callback: {
            name: 'showMiniBag'
          }
        }
      }
    });
    expect(wrapper.find('.bag__item-counter').exists()).toBe(true);
    expect(wrapper.find('.bag__item-counter').text()).toBe("2");
  });

  it('should emit event when clicked', async () =>{
    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()).toBeTruthy()
  })





})
