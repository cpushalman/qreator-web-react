import './genqr.css'
import SplineScene from './splinescene'
import './splinescene.css'

export default function GenQr(){
    return(
        <>
        <SplineScene></SplineScene>
        <div className="container">
            <div className="sidebar">
                <div className='Header'><h1>QREATOR</h1></div>
                <div className="sidebarmain"><div className="nav">
                    <ul><li>Generate QR</li>
                    <li>Dashboard</li>
                    <li>Analytics   </li></ul></div></div>
            </div>
            <div className="mainarea"></div>
        </div>
        </>
    )
}