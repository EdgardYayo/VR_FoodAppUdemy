import React, { useState } from 'react'
import style from './Search.module.css'

const Search = ({ getData }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (event) => {
    const { value } = event.target
    setInputValue(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getData(inputValue)

  }

  return (
    <form onSubmit={handleSubmit} className={style.search}>
        <input 
          name='search' 
          onChange={handleInputValue} 
          value={inputValue} 
          placeholder='Search Recipes' 
          id='search'
        />
        <button type='submit'>Search</button>
    </form>
  )
}

export default Search