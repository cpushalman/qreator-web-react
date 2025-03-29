import './home.css'
import SplineScene from './splinescene'


function Home(){
    return(
    <>
    <SplineScene/><div className="homecontainer">
    
    <div className="info">
       <p className='logo'>QREATOR</p>
       <p id='content'>Say goodbye to long URLs and hello to instant connections! Our QR code generator helps you create sleek, scannable codes for marketing, <br /> networking, or everyday use—effortless,  efficient, and absolutely free!</p>
       <div id="aboutus"><a href="#" ><p>About Us >>> </p></a></div>
  
    </div>
    <div className='btn'>
    <a href="login"><button className='Login-btn'>Login</button></a>
    </div>
    </div>
    
   
       
  
    </>
)}
export default Home