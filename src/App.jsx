import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import Team from "./Pages/Team";
import Announcement from "./Pages/Announcement";
import Cells from "./Pages/Cells";
import Events from "./Pages/Events";
import SignIn from "./Pages/SignIn";
import Signup from "./Pages/Signup";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Events" element={<Events />} />
      <Route
        path="/Team"
        element={
          <ProtectedRoute>
            <Team />
          </ProtectedRoute>
        }
      />
      <Route path="/Announcement" element={<Announcement />} />
      <Route path="/Cells" element={<Cells />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
