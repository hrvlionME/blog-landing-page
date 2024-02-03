import { useState } from 'react'
import TopSection from './components/TopSection'
import './App.css'
import Content from './components/Content'
import BotSection from './components/BotSection'
import NavigationBar from './components/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>  
      <NavigationBar/>
    <div className="container px-4 mx-auto max-w-5xl font-body">
      <TopSection/>
      <Content/>
      <BotSection/>
    </div>
    <footer className="bg-pri">
      <div className="flex text-white py-8 font-title justify-around">
        <p>TailwindCSS</p>
        <p>ReactJS</p>
      </div>
    </footer>
  </>
  )
}

export default App
