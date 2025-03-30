import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css'

import Home from './components/home.jsx'
import Login from './components/loginpg.jsx'
import DashBoard from './components/dashboard.jsx'
import Dboard from './components/DashboardMain.jsx'
import GenQr from './components/genqr.jsx'


function App() {
  const [count, setCount] = useState(0) 

  return (
    <>      <BrowserRouter>
    <Routes>
<Route index element={<Home/>}></Route>
<Route path='/home' element={<Home/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/dash' element={<DashBoard></DashBoard>}></Route>
<Route path='/dash1' element={<Dboard></Dboard>}></Route>
<Route path='/genqr' element={<GenQr></GenQr>}></Route>






    </Routes>
    
    
    </BrowserRouter>
  
      

    </>
  )
}

export default App
