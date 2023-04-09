import React from 'react'
import style from './RecipeItem.module.css'

const RecipeItem = ({ title, image }) => {
  return (
    <div className={style.container}>
        <img src={image} alt={title}/>
        <h2>{title}</h2> 
        <button>Add to Favorites</button>
    </div>
  )
}

export default RecipeItem;