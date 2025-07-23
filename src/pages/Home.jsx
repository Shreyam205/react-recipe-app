import axios from '../utils/axios'

const Home = () => {
  const getproduct = async () => {
    try {
      const  {data} = await axios.get("/products")
      console.log(data);
    } 
    catch (error) {
      console.log(error)      
    }
  }

  return (
    <div>
      <div>Home</div>
      <button onClick={getproduct}>Get Products</button>
    </div>
  )
}

export default Home