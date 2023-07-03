import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
  const [loading, setLoading] = useState(true)
  const [gifs, setGifs] = useState([])


  useEffect(() => {
    getGifs(category).then((response) => {
      setLoading(false)
      setGifs(response)
    })
  }, [category])

  return {
    loading, 
    gifs
  }

}