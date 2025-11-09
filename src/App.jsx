import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Announcement from "./Pages/Announcement";
import Cells from "./Pages/Cells";
import Events from "./Pages/Events";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Announcement" element={<Announcement />} />
      <Route path="/Cells" element={<Cells />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
