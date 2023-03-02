export const BASE_URL = 'https://api.thecatapi.com/v1'
export const IMAGE_URL = 'https://cdn2.thecatapi.com/images'

export const getCats = () =>
  fetch(`${BASE_URL}/breeds`).then((res) => res.json())
