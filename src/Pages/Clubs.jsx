import React, { useRef, useEffect } from "react";
import Navbar from "../component/Navbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Clubs = () => {
  const ClubRef = useRef(null);

  useEffect(() => {
    gsap.to(ClubRef.current, {
      scrollTrigger: {
        trigger: ClubRef.current,
        start: "top 40%",
        end: "top 0%",
        scrub: 2,
        markers: true,
      },
      y: 300,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className=" w-full h-screen mt-20 px-10 flex items-center justify-start">
        <h1
          ref={ClubRef}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-6xl md:text-9xl font-bold text-black"
        >
          CLUBS
        </h1>
      </div>
      <div className=" w-full h-screen mt-20 px-10 flex items-center justify-start">
        <h1
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-6xl md:text-9xl font-bold text-black"
        >
          CLUBS
        </h1>
      </div>
    </div>
  );
};

export default Clubs;
