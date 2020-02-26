import { shallowMount } from '@vue/test-utils'
import Pagination from '@/components/Pagination'

describe('Pagination component test', () => {
  const wrapper = shallowMount(Pagination, {
    propsData: {
      pages: 6
    }
  })

  it('should have the active page to 1', () => {
    expect.assertions(2)
    expect(wrapper.find('.active').exists()).toBe(true)
    expect(wrapper.find('.active').text()).toBe('1')
  })

  it('should change the page and emit the event', async () => {
    const list = wrapper.findAll('.pagination__link')
    const thirdlink = list.at(3)
    thirdlink.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.active').exists()).toBe(true)
    expect(wrapper.find('.active').text()).toBe('4')
  })
})
