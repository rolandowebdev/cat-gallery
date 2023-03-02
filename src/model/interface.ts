export interface Cat {
  id: string
  name: string
  description: string
  reference_image_id: string
}

export interface Cats {
  cats: Cat[]
  isLoading: boolean
}
