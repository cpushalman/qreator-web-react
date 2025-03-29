import DashBoard from './dashboard'
import './loginpg.css'
import SplineScene from './splinescene'

function Login() {
    return(
        <>
<SplineScene></SplineScene>
       
        <div class="background">
        
    </div>
    <form>
        <h3>QREATOR</h3>

        <label for="username">Roll No</label>
        <input type="text" placeholder="Enter Your Roll No" id="username"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password"/>
<a href="/dash"> <div className="logbtn">
      Log IN</div></a>
    </form>
             </>
             )

            }






export default Login