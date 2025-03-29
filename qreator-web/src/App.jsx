import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'

import Home from './components/home.jsx'
import Login from './components/loginpg.jsx'


function App() {
  const [count, setCount] = useState(0) 

  return (
    <>      <BrowserRouter>
    <Routes>
<Route index element={<Home/>}></Route>
<Route path='/home' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>






    </Routes>
    
    
    </BrowserRouter>
  
      

    </>
  )
}

export default App
