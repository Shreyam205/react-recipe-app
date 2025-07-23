import { nanoid } from "nanoid"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { recipecontext } from "../context/RecipeContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Create = () => {
  const navigate = useNavigate()
  const {data, setdata} = useContext(recipecontext)
  const { register, handleSubmit, reset } = useForm()

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid()
    setdata([...data, recipe])
    toast.success("Recipe Created!!!")
    reset()
    navigate("/recipes")
  }

  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input className="block p-2 border-b outline-none w-full" {...register("image")} type="url" placeholder="Enter recipe image URL" />
      <small className="text-sm text-red-400">this is the error</small>

      <input className="block p-2 border-b outline-none w-full" {...register("title")} type="text" placeholder="Recipe Name" />
      <small className="text-sm text-red-400">this is the error</small>

      <textarea className="block p-2 border-b outline-none w-full" {...register("desc")} type="text" placeholder="Enter Description Here"></textarea>
      <small className="text-sm text-red-400">this is the error</small>

      <textarea className="block p-2 border-b outline-none w-full" {...register("ingr")} type="text" placeholder="write ingredients seperated by commas"></textarea>
      <small className="text-sm text-red-400">this is the error</small>
      
      <textarea className="block p-2 border-b outline-none w-full" {...register("inst")} type="text" placeholder="write instructions"></textarea>
      <small className="text-sm text-red-400">this is the error</small>

      <select className="block border-b outline-none text-gray-500 p-2 w-1/6" {...register("category")}>
        <option value="breakfast">Breakfast</option>
        <option value="brunch">Brunch</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>

      <button className="duration-170 hover:scale-105 w-1/5 mt-5 block bg-blue-500 rounded-md p-2">Save Recipe</button>
    </form>
  )
}

export default Create