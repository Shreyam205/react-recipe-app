import { Link } from "react-router-dom"

const RecipeCard = (props) => {
    const { id, image, title, desc, inst, ingr } = props.recipe
    return (
        <Link to={`/recipes/details/${id}`} className="duration-170 hover:scale-105 bg-zinc-900 mr-3 mb-3 w-[19%] rounded-md overflow-hidden flex flex-col justify-around items-center content-center">
        <img className="object-cover w-[90%] h-1/2 rounded-md" src={image} alt="" />
        <h1 className="mt-2 px-2 font-bold">{title}</h1>
        <p className="px-2 text-sm">{desc.slice(0, 100)}...{" "}
            <small className="text-blue-400">Learn more</small>
        </p>
        </Link>
    )
}

export default RecipeCard