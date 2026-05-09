import "./style.css";
import Particle from "../Particle/Particle";
function Loading() {
  return (
    <div className="loading-screen">
      <Particle />
      <h1 className="loading-title">Mohab Mostafa</h1>
      <div className="loading-bar"></div>
      <p className="loading-sub">Loading Portfolio...</p>
    </div>
  );
}

export default Loading;
