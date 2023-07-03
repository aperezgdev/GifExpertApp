export const getGifs = async (category) => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10&offset=0`
  const response = await fetch(url)
  const { data } = await response.json()

  return data.map(({id, images, title}) => {
    return  { 
              id,
              title,
              url: images.fixed_height.url
            }
        } 
      ) 
}