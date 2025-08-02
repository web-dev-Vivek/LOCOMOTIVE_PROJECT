// src/components/IntroScreen.jsx

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const IntroScreen = ({ onAnimationComplete }) => {
  const introRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Remove intro after animation
        onAnimationComplete();
      },
    });

    // Initial animation - fade in title and subtitle
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .to({}, { duration: 1.5 }) // Wait for 1.5 seconds
      .to(introRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power2.inOut",
      });
  }, [onAnimationComplete]);

  return (
    <div
      ref={introRef}
      className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 z-50 flex flex-col items-center justify-center"
    >
      <div className="text-center"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-25 animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};

export default IntroScreen;
