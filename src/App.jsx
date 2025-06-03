import "./App.css";
import { Routes, Route } from "react-router";

import Home from "./components/Home";
import AboutAPI from "./components/AboutAPI";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-api" element={<AboutAPI />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
