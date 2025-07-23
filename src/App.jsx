import Mainroutes from "./routes/Mainroutes"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div className="py-10 px-[10%] text-2xl bg-zinc-800 text-white w-full h-screen">
    <Navbar/>
    <Mainroutes/>
    </div>
  )
}

export default App