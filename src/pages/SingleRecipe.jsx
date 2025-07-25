import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';

const SingleRecipe = () => {

    // const navigate = useNavigate()
    const { data, setdata } = useContext(recipecontext)
    const params = useParams()
    const recipe = data.find((recipe) => params.id == recipe.id)
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            image: recipe?.image,
            title: recipe?.title,
            desc: recipe?.desc,
            ingr: recipe?.ingredients,
            inst: recipe?.instructions,
            category: recipe?.category,
        }
    })

    const UpdateHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id)
        const copydata = [...data]
        copydata[index] = { ...copydata[index], ...recipe }
        setdata(copydata)
        localStorage.setItem("recipes", JSON.stringify(copydata))
        toast.success("Recipe Updated!")
    }

    const DeleteHandler = () => {
        const filterdata = data.filter((r) => r.id != params.id)
        setdata(filterdata)
        localStorage.setItem("recipes", JSON.stringify(filterdata))
        toast.success("Recipe Deleted!")
        // navigate("/recipes")
    }

    const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem("fav")) || [])

    const FavHandler = () => {
        let copyfav = [...favorite]
        copyfav.push(recipe)
        setFavorite(copyfav)
        localStorage.setItem("fav", JSON.stringify(copyfav))
    }

    const unFavHandler = () => {
        const  filterFav = favorite.filter((f) => f.id != recipe?.id)
        setFavorite(filterFav)
        localStorage.setItem("fav", JSON.stringify(filterFav))
    }

    // useEffect(() => {
    //   console.log("Mounted")
    //   return () => {
    //     console.log("Unmounted")
    //   }
    // }, [favorite])
    
    

    return recipe ? (
        <div className='w-full flex'>
            <div className='left w-1/2 p-2'>
                <div className='flex flex-col gap-7'>
                    <div className='flex gap-3'>
                        <h1 className='text-5xl font-bold'>{recipe.title}</h1>
                        <div className='flex items-center mt-4'>
                            {favorite.find((f) => f.id == recipe?.id) ? <i onClick={unFavHandler} className="ri-heart-fill absolute text-red-500 text-4xl"></i> : <i onClick={FavHandler} className="ri-heart-line absolute text-red-500 text-4xl"></i>}
                        </div>
                    </div>
                    <img className='w-[30%] rounded-md' src={recipe.image} alt="No image to show" />
                    <p className='text-sm w-[80%]'>{recipe.desc}</p>
                    <p className='text-sm w-[80%]'>{recipe.ingr}</p>
                    <p className='text-sm w-[80%]'>{recipe.inst}</p>
                    <h3 className='text-gray-400 text-[90%]'>Recipe Category: {recipe.category}</h3>
                </div>
            </div>
            <div className='right w-1/2 p-2'>
                <form onSubmit={handleSubmit(UpdateHandler)}>
                    <input className="block w-full p-2 border-b outline-none" {...register("image")} type="url" placeholder="Enter recipe image URL" />
                    <small className="text-sm text-red-400">this is the error</small>

                    <input className="block w-full p-2 border-b outline-none" {...register("title")} type="text" placeholder="Recipe Name" />
                    <small className="text-sm text-red-400">this is the error</small>

                    <textarea className="block w-full p-2 border-b outline-none" {...register("desc")} type="text" placeholder="Enter Description Here"></textarea>
                    <small className="text-sm text-red-400">this is the error</small>

                    <textarea className="block w-full p-2 border-b outline-none" {...register("ingr")} type="text" placeholder="write ingredients seperated by commas"></textarea>
                    <small className="text-sm text-red-400">this is the error</small>

                    <textarea className="block w-full p-2 border-b outline-none" {...register("inst")} type="text" placeholder="write instructions"></textarea>
                    <small className="text-sm text-red-400">this is the error</small>

                    <select className="block w-1/4 border-b outline-none text-gray-500 p-2" {...register("category")} >
                        <option value="breakfast">Breakfast</option>
                        <option value="brunch">Brunch</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>

                    <div className='flex gap-10'>
                        <button className=" duration-170 hover:scale-105 mt-5 flex gap-2 items-center text-black bg-yellow-500 rounded-md p-2">Update Recipe <FaRegEdit /></button>

                        <button onClick={DeleteHandler} className="duration-170 hover:scale-105 mt-5 flex items-center gap-2 bg-red-500 rounded-md p-2">Delete Recipe <MdDeleteForever /></button>
                    </div>

                </form>
            </div>
        </div>

    ) : ("No Recipes to show")
}

export default SingleRecipe