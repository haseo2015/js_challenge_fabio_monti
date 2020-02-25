export default {
  getProducts: {
    url: 'https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0',
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'accept-language': 'it',
      'x-musement-currency': 'EUR',
      'x-musement-version': '3.4.0'
    }
  }
}
