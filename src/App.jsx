import './App.css'
import Navbar from "./Components/Navbar"
import HeroArea from './Components/HeroArea'
import Trusted from './Components/trusted'
import Card from './Components/Card'
function App() { 

  return (
    <>
      <main className="bg-[#07292F]"> 
        <Navbar/>
        <div className="space-y-[70px]">
          <HeroArea />
          <Trusted />
          <Card />
        </div>
      </main>
    </>
  )
}

export default App
