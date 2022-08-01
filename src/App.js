import { Routes, Route } from "react-router-dom";

import Banner from "./routes/banner/banner.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import MeetTheTeam from "./routes/meet-the-team/meet-the-team.component";
import OurWork from "./routes/our-work/our-work.component";
import Services from "./routes/services/services.component";
import WorkWithUs from "./routes/work-with-us/work-with-us.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Banner />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
      </Route>
    </Routes>
  );
}

export default App;
