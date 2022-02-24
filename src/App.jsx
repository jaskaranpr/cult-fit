import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { CultCenter } from "./components/cult/CultCenter";
import { Gyms } from "./components/cult/Gyms";
import { Home } from "./components/homePage/Home";
import { OnlinePT } from "./components/cult/OnlinePT";
import { CultSport } from "./components/cult/CultSport";
import { LuxuryGyms } from "./components/cult/LuxuryGyms";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/loginPage/Login";

function App() {
  const [log, setLog] = useState(false);
  return (
    <div className="App">
      <Navbar setLog={setLog} log={log} />
      {log && <Login setLog={setLog} log={log} />}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cult/gym" element={<CultCenter />} />
        <Route path="/cult/cult-pass" element={<Gyms />} />
        <Route path="/cult/online-personal-training" element={<OnlinePT />} />
        <Route path="/store/gear" element={<CultSport />} />
        <Route path="/cult/othergyms" element={<LuxuryGyms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
