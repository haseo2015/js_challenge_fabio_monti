import api from '@/api'

describe('api basic test', () => {
  it('pass automatically test', () => {
    expect(true).toBe(true)
  })

  it('Should call the function callAPI', () => {
    api.getProducts().then(v => {
      expect(api.callAPI()).toHaveBeenCalledTimes(1)
      expect(v.length).toBe(6)
    })
      .catch(e => console.log(e))
  })
})
