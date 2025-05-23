import './App.css'
import Navbar from "./Components/Navbar"
import HeroArea from './Components/HeroArea'
import Trusted from './Components/trusted'
import Card from './Components/Card'
import Train from './Components/Train'
import Carousel from './Components/Carousel'
import Improvement from './Components/Improvement'
import Started from './Components/Started'
import Footer from './Components/Footer'
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
          <Started />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default App
