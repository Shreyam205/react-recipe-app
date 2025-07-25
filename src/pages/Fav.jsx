import React, { useContext } from 'react'
import {recipecontext} from  "../context/RecipeContext"
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
  const favorite = JSON.parse(localStorage.getItem("fav") || [])

  const  renderrecipes = favorite.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>)
  return (
    <div className='flex flex-wrap'>{favorite.length > 0 ? renderrecipes : "No favorite recipes found"}</div>
  )
}

export default Recipes