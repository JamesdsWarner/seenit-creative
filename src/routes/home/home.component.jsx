import ReactPlayer from "react-player";
import ledBy from "../../images/led_by.png";
import purpleCircle from "../../images/purple-circle-modified.png";
import orangeCircle from "../../images/orange-circle-modified.png";
import "./home.styles.scss";

function Home() {
  return (
    <div className="body-container">
      <img className="orange-circle" src={orangeCircle} />
      <img className="purple-circle" src={purpleCircle} />
      <div className="video-container">
        <ReactPlayer url="/videos/SeenitCreativePromo-V2.mp4" controls={true} height="100%" width="100%" />
      </div>
      <img className="led-by" src={ledBy} />
    </div>
  );
}

export default Home;
