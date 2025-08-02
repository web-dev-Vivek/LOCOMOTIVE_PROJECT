// src/Pages/Events.jsx
import React from "react";
import Navbar from "../component/Navbar";
import Eventimg from "../assets/Event.jpg";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "../component/Footer.jsx";

gsap.registerPlugin(ScrollTrigger);

function Events() {
  const MoveRef = useRef(null);

  useEffect(() => {
    gsap.to(MoveRef.current, {
      scrollTrigger: {
        trigger: MoveRef.current,
        start: "top 0%",
        end: "top 40%",
        scrub: 2,
      },
      x: 0,
      y: 300,
      ease: "power1.out",
    });
  }, []); // ✅ Add this

  return (
    <>
      <Navbar />

      <div
        id="event"
        className="min-h-screen flex flex-col px-6 py-10 bg-white"
      >
        <h1
          ref={MoveRef}
          className="text-4xl md:text-9xl font-bold flex justify-end text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Events
        </h1>

        <img className="w-[40vw] h-[35vw]" src={Eventimg} alt="" />
      </div>
      <div></div>
      <Footer />
    </>
  );
}

export default Events;
