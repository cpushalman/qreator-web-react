import Spline from '@splinetool/react-spline';
import "./splinescene.css"

export default function SplineScene() {
  return (<div className="spline">
      <div className='spline-scene'>
      <Spline scene="https://prod.spline.design/ENLDBacwTnjap6TK/scene.splinecode" />
      </div>
      </div>
  );
}
