// src/App.js

import React, { useState } from "react";
import IntroScreen from "./Pages/IntroScreen";
import EventsList from "./Pages/EventsList";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative ">
      {showIntro && (
        <IntroScreen onAnimationComplete={() => setShowIntro(false)} />
      )}
      {!showIntro && <EventsList />}
    </div>
  );
}

export default App;
