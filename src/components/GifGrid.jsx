import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

// eslint-disable-next-line react/prop-types
export const GifGrid  = ({ category }) => {
  const {loading, gifs} = useFetchGifs(category)

  return (
   !loading ? 
    <div>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          gifs.map(({id, title, url}) => (
            <GifItem key={id} title={title} url={url}/>
          ))
        }
      </div>
    </div> 
    : 'loading'
  )
}

