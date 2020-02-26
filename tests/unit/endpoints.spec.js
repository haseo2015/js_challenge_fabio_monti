import endpoints from '@/assets/endpoints'

describe('endpoints basic test', () => {
  it('loads correctly the endpoints file', () => {
    expect(endpoints).toBeInstanceOf(Object)
  })

  it('check the correct structure of the endpoint', () => {
    expect.assertions(5)
    expect(endpoints.getProducts).toBeInstanceOf(Object)
    expect(endpoints.getProducts).toHaveProperty('url', 'https://api.musement.com/api/v3/venues/164/activities')
    expect(endpoints.getProducts).toHaveProperty('method', 'GET')
    expect(endpoints.getProducts).toHaveProperty('headers')
    expect(endpoints.getProducts.headers).toHaveProperty('x-musement-currency')
  })

  it('check the correct version of the endpoint', () => {
    expect(endpoints.getProducts.headers).toHaveProperty('x-musement-version', '3.4.0')
  })
})
