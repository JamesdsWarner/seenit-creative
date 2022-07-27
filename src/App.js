import "./App.css";
import Banner from "./components/banner/banner.component";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <div className="video-container">
          <ReactPlayer url="/videos/SeenitCreativePromo-V2.mp4" controls={true} height="100%" width="100%" />
        </div>
        <div className="led-by-container">
          <img src="images/led_by.png" />
        </div>
      </header>
    </div>
  );
}

export default App;
