import { NavLink } from 'react-router-dom'
import { MdFavorite } from "react-icons/md";

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
            <div className='flex items-center gap-1'>
                Favorites<MdFavorite className='mt-1' />
            </div>
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