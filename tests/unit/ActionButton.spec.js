import { shallowMount } from '@vue/test-utils'
import ActionButton from '@/components/ActionButton'

describe('AddRemoveToBag Component test', () => {
  
  it('pass automatically test', () => {
    expect(true).toBe(true)
  });

  it('should mount correctly the ActionButton component', () => {
    const wrapper = shallowMount(ActionButton, {
      propsData: {
       params: {
        totalPrice: 100
       }
      }
    })
    // console.log(wrapper.html())
    expect(wrapper.find('.header-bag__item').exists()).toBe(true)
  });

  it('should mount have required prop', () => {
      const wrapper = shallowMount(ActionButton, {
        propsData: {
          params: {
            totalPrice: 1000
          }
        }
      })
    expect(wrapper.find('.header-bag__price').text()).toBe("1000")
  })

  it('should not show counter is zero', () => {
    const wrapper = shallowMount(ActionButton, {
      propsData: {
        params: {
          totalPrice: 100,
          itemsCounter: 0
        }
      }
    })
    
    expect(wrapper.find('.bag__item-counter').exists()).toBe(false)
  });

  it('should show counter and its value when counter is greater than 0', () => {
    expect.assertions(2);
    const wrapper = shallowMount(ActionButton, {
      propsData: {
        params: {
          totalPrice: 100,
          itemsCounter: 4
        }
      }
    })
    
    expect(wrapper.find('.bag__item-counter').exists()).toBe(true);
    expect(wrapper.find('.bag__item-counter').text()).toBe("4");
  });

  it('should emit event when clicked', async () =>{
    const wrapper = shallowMount(ActionButton, {
      propsData: {
        params: {
          callback: {
            name: 'showMiniBag'
          }
        }
      }
    })

    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.emitted()).toBeTruthy()
  })






})
