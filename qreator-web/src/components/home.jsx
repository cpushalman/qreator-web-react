import './home.css'
import SplineScene from './splinescene'


function Home(){
    return(
    <>
    <section className='hom'>
    <SplineScene/>
    <div className="info">
    <h1>QREATOR</h1>
    <p id='content'>Say goodbye to long URLs and hello to instant connections! Our QR code generator helps you create sleek, scannable codes for marketing, <br /> networking, or everyday use—effortless,  efficient, and absolutely free!</p>
    <a href="#" ><p id='aboutus'>About Us >>> </p></a> </div>
    <div className='btn'>
    <a href="login"><button className='Login-btn'>Login</button></a>
    </div>
    
    </section>
    <section>
        
    </section>
   
       
  
    </>
)}
export default Home