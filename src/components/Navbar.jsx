import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-x-50 font-bold mb-15'>
        <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to="/">
            Home
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to="/recipes">
            Recipes
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to="/favorites">
            Favorites
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to="/about">
            About
        </NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-400" : ""} to="/create-recipe">
            Create Recipe
        </NavLink>
    </div>
  )
}

export default Navbar