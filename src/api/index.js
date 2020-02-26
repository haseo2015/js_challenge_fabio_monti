/* API */
import endpoints from '@/assets/endpoints'

const callAPI = (args) => {
  // console.log('callAPI called')
  if (!name && !args) return
  return new Promise((resolve, reject) => {
    fetch(args.url, args.options)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
  })
}

const getProducts = (query) => {
  const endpoint = {
    ...endpoints.getProducts,
    url: endpoints.getProducts.url += (query !== undefined) ? query : ''
  }
  // console.log(endpoint)
  return new Promise((resolve, reject) => {
    callAPI(endpoint).then(response => {
      resolve(response)
    })
      .catch(e => reject(e))
  })
}

export default {
  callAPI,
  getProducts
}
