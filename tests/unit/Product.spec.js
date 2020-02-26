import { shallowMount } from '@vue/test-utils'
import Product from '@/components/Product'

describe('Product Component test', () => {
  const wrapper = shallowMount(Product, {
    mocks: {
      $store: {
        state: {
          cartItems: [],
          wishlistItems: []
        }
      }
    },
    propsData: {
      attrs: {
        cover_image_url: 'https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg',
        retail_price: {
          currency: 'EUR',
          value: 28,
          formatted_value: '€ 28.00',
          formatted_iso_value: '28,00 €'
        }
      }
    }
  })

  it('shuold render the correct price', () => {
    expect(wrapper.find('.product__price').text()).toBe('€ 28.00')
  })

  it('shuold render the net price', () => {
    const wrapper = shallowMount(Product, {
      mocks: {
        $store: {
          state: {
            cartItems: [],
            wishlistItems: []
          }
        }
      },
      propsData: {
        attrs: {
          title: 'Prodotto di test',
          cover_image_url: 'https://images.musement.com/cover/0002/50/la-creazione-di-adamo-vaticani_header-149100.jpeg',
          retail_price: {
            currency: 'EUR',
            value: 28,
            formatted_value: '€ 28.00',
            formatted_iso_value: '28,00 €'
          },
          net_price: {
            currency: 'EUR',
            value: 10,
            formatted_value: '€ 30.80',
            formatted_iso_value: '30,80 €'
          },
          discount: 10
        }
      }
    })
    expect.assertions(3)
    expect(wrapper.find('.product__price--strike').exists()).toBe(true)
    expect(wrapper.find('.product__price--strike').text()).toBe('€ 30.80')
    expect(wrapper.find('.product__price--discounted').text()).toBe('€ 28.00')
  })

  it('should add', async () => {
    const spyMethod = jest.spyOn(wrapper.vm, 'addTo')
    wrapper.find('.product__add-to-cart').trigger('click')
    await wrapper.vm.$nextTick()
    expect(spyMethod).toHaveBeenCalled()
    spyMethod.mockReset()
  })
})
