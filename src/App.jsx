import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Announcement from "./Pages/Announcement";
import Cells from "./Pages/Cells";
import Events from "./Pages/Events";
import Signup from "./Pages/Signup.jsx";
import SignIn from "./Pages/SignIn.jsx";

function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Events" element={<Events />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Announcement" element={<Announcement />} />
      <Route path="/Cells" element={<Cells />} />

      {/* Clerk Auth Routes */}
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/" element={<Signup />} />
    </Routes>
  );
}

export default App;
