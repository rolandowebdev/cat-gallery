import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card } from '@/components'
import { Cat, Cats } from '@/model/interface'
import { getCatsFetch } from '@/store/slices/catSlice'

export const App = () => {
  const dispatch = useDispatch()
  const { cats } = useSelector((state: { cats: Cats }) => state.cats)

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])

  return (
    <main className="flex justify-center flex-col max-w-5xl mx-auto">
      <h1 className="font-bold text-5xl text-center">
        React Typescript Starter
      </h1>
      <div className="grid grid-cols-4 gap-3 mt-12">
        {cats.slice(0, 6).map((cat: Cat) => (
          <Card
            key={cat.id}
            alt={cat.name}
            caption={
              cat.description.length > 40
                ? `${cat.description.slice(0, 40)}...`
                : cat.description
            }
            imageId={cat.reference_image_id}
          />
        ))}
      </div>
    </main>
  )
}
