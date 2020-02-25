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

const getProducts = () => {
  return new Promise((resolve, reject) => {
    callAPI(endpoints.getProducts).then(response => {
      console.log('getProduct API response', response)
      resolve(response)
    })
      .catch(e => reject(e))
  })
}

export default {
  callAPI,
  getProducts
}
