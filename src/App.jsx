// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Announcement from "./Pages/Announcement";
import Clubs from "./Pages/Clubs";
import Cells from "./Pages/Cells";
import Events from "./Pages/Events";

function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/cells" element={<Cells />} />
      </Routes>
    </div>
  );
}

export default App;
