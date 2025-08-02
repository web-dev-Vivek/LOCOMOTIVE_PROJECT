// EventsList1.jsx

import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function EventsList1() {
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);

  useEffect(() => {
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1.2, // speed of scroll
      class: "is-inview", // class added to elements in view
    });

    // Cleanup on unmount
    return () => {
      if (locoScrollRef.current) locoScrollRef.current.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      data-scroll
      data-scroll-speed="2"
      className="bg-red-600"
    >
      <div className="min-h-screen bg-red-600 p-10">
        <h1 className="text-6xl font-bold text-black">
          EventsList1 with Locomotive Scroll
        </h1>
        <p className="mt-10 text-lg text-gray-600">
          Scroll to see the effect...
        </p>
        <div className="h-[200vh]" /> {/* Just to allow scrolling */}
      </div>
    </div>
  );
}

export default EventsList1;
