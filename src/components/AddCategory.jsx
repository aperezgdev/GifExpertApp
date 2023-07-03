import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ actualizarCategories }) => {

  const [input, setInput] = useState('')

  const onSubmit = (evt) => {
    evt.preventDefault()
    if(input.trim().length > 1) {
      actualizarCategories(input)
      setInput('')
    }
  }

  const onChange = (evt) => {
    setInput(evt.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type="text" value={input} placeholder="Buscar gifs"/>
    </form>
  )
}