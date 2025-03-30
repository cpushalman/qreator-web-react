import './dashboard.css'
import './splinescene.css'
import DashSpline from './dashspline'
import SplineScene from './splinescene'
function DashBoard(props){


return(
 <> 
   <h1 id='dashh1'>QREATOR</h1>
  <p id='dash'>"GO-Live <br />
  with Instant QRs"</p>

<DashSpline></DashSpline>
 <SplineScene></SplineScene>



  </>


)



}
export default DashBoard