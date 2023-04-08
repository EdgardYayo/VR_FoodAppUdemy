import React from 'react'
import style from './Search.module.css'

const Search = () => {
  return (
    <form className={style.search}>
        <input name='search' placeholder='Search Recipes' id='search'/>
        <button type='submit'>Search</button>
    </form>
  )
}

export default Search