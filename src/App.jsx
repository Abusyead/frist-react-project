import './App.css'
import Navbar from "./Components/Navbar"
import HeroArea from './Components/HeroArea'
import Trusted from './Components/trusted'
import Card from './Components/Card'
import Train from './Components/Train'
import Carousel from './Components/Carousel'
import Improvement from './Components/Improvement'
function App() { 

  return (
    <>
      <main className="bg-[#07292F]"> 
        <Navbar/>
        <div className="space-y-[70px] sm:space-y-[30px] ">
          <HeroArea />
          <Trusted />
          <Card />
          <Train />
          <Carousel />
          <Improvement />
        </div>
      </main>
    </>
  )
}

export default App
