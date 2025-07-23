import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { recipecontext } from '../context/RecipeContext'
import { useForm } from 'react-hook-form'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { toast } from 'react-toastify';

const SingleRecipe = () => {

    const navigate = useNavigate()
    const { data, setdata } = useContext(recipecontext)
    const params = useParams()
    const recipe = data.find((recipe) => params.id == recipe.id)
    const { register, handleSubmit, reset } = useForm({
        defaultValues:{
            image: recipe.image,
            title: recipe.title,
            desc: recipe.desc,
            ingr: recipe.ingredients,
            inst: recipe.instructions,
            category: recipe.category,
        }
    })

    const SubmitHandler = (recipe) => {
        const index = data.findIndex((recipe) => params.id == recipe.id)
        const copydata = [...data]
        copydata[index] = { ...copydata[index], ...recipe }
        setdata(copydata)
        toast.success("Recipe Updated!")
    }

    const DeleteHandler = () => {
        const filterdata = data.filter((r) => r.id != params.id)
        setdata(filterdata)
        toast.success("Recipe Deleted!")
        // navigate("/recipes")
    }

    return recipe ? (
        <div className='w-full flex'>
            <div className='left w-1/2 p-2'>
                <div className='flex flex-col items-center '>
                    <h1 className='text-5xl font-bold'>{recipe.title}</h1>
                </div>
            </div>
            <div className='right w-1/2 p-2'>
                <form onSubmit={handleSubmit(SubmitHandler)}>
                    <input className="block p-2 border-b outline-none" {...register("image")} type="url" placeholder="Enter recipe image URL" />
                    <small className="text-sm text-red-400">this is the error</small>

                    <input className="block p-2 border-b outline-none" {...register("title")} type="text" placeholder="Recipe Name" />
                    <small className="text-sm text-red-400">this is the error</small>

                    <textarea className="block p-2 border-b outline-none" {...register("desc")} type="text" placeholder="Enter Description Here"></textarea>
                    <small className="text-sm text-red-400">this is the error</small>

                    <textarea className="block p-2 border-b outline-none" {...register("ingr")}  type="text" placeholder="write ingredients seperated by commas"></textarea>
                    <small className="text-sm text-red-400">this is the error</small>

                    <textarea className="block p-2 border-b outline-none" {...register("inst")}  type="text" placeholder="write instructions"></textarea>
                    <small className="text-sm text-red-400">this is the error</small>

                    <select className="block border-b outline-none text-gray-500 p-2" {...register("category")} >
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