import "./style.css";
import Particle from "../Particle/Particle";
// import { PropagateLoader} from "react-spinners";

function Loading() {
  return (
    <div className="loading-screen">
      <Particle />
      <h1 className="loading-title">Mohab Mostafa</h1>
      <div className="loading-bar"></div>
      {/* <PropagateLoader color="#00eeff" size={30}/> */}
      <p className="loading-sub">Loading Portfolio...</p>
    </div>
  );
}

export default Loading;
