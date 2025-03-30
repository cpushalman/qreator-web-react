import Spline from '@splinetool/react-spline';
import {BrowserRouter,Routes,Route, Navigate, useNavigate} from 'react-router-dom'

import './dashspline.css'
import Dboard from './DashboardMain';




export default function DashSpline() {
    const navigate=useNavigate( );

    function onSplineKeyDown(e){
        console.log("working");
      
        if(e.target.name=="Key GO")
        { console.log("ENter");
            setTimeout(()=>{navigate('/genqr');},2000);

        }
        else if(e.target.name=="Key 1")
        {
            console.log("Analytics");
        }
        else if(e.target.name=="Key 2")
        {
            console.log("Dashboard");
            setTimeout(()=>{navigate('/dash1');},2000);
            
       
        }
        else if(e.target.name=="Key 0")
        {
            console.log("Logout");
            setTimeout(()=>{navigate('/');},2000);
        }
    };
    return (
    <div className="dash-spline">
    <Spline scene="https://prod.spline.design/L5jSVUgZLc-SRGoZ/scene.splinecode"  onSplineKeyDown={onSplineKeyDown} />

    </div>);

 
}


