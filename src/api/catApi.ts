const BASE_URL = 'https://api.thecatapi.com/v1/breeds'

export const getCats = () => fetch(BASE_URL).then((res) => res.json())
