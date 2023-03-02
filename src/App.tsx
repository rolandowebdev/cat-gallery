import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cat } from './model/interface'
import { getCatsFetch } from './store/slices/catSlice'

export const App = () => {
  const dispatch = useDispatch()
  const cats = useSelector((state: Cat) => state.cats)

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])

  return (
    <div>
      <h1>React Typescript Starter</h1>
      <p>{JSON.stringify(cats)}</p>
    </div>
  )
}
