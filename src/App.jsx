import Category from "./components/Category"
import Food from "./components/Food"
import HeadCarts from "./components/HeadCarts"
import { Hero } from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {
 

  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadCarts/>
      <Food/>
      <Category/>
      
    </div>
  )
}

export default App
