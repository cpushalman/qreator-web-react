import { useState } from 'react'

import './App.css'

import SplineScene from './components/splinescene'
import Home from './components/home.jsx'


function App() {
  const [count, setCount] = useState(0) 

  return (
    <>           <SplineScene/>
          
          

    <Home/>
  
      

    </>
  )
}

export default App
