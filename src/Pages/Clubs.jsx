import React, { useRef, useEffect } from "react";
import Navbar from "../component/Navbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Club from "../assets/Club.jpg";

gsap.registerPlugin(ScrollTrigger);

const Clubs = () => {
  const ClubRef = useRef(null);

  useEffect(() => {
    gsap.to(ClubRef.current, {
      scrollTrigger: {
        trigger: ClubRef.current,
        start: "top 10%",
        end: "top -40%",
        scrub: 3,
      },
      y: 510,
      ease: "power1.out",
    });
  }, []);

  return (
    <div
      style={{ backgroundColor: "#f2f7fa" }}
      className="min-h-screen flex flex-col justify-center items-center "
    >
      <Navbar />
      <div className=" w-[95vw] border-b-1  border-gray h-screen mt-20 pb-10 flex items-center justify-between">
        <div className="w-full h-full flex items-start justify-start ">
          <h1
            ref={ClubRef}
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-6xl md:text-9xl font-bold text-black"
          >
            CLUBS
          </h1>
        </div>
        <div className="w-full h-full flex items-end justify-end ">
          <img
            className="w-[40vw] flex md:flex-col flex-row"
            src={Club}
            alt=""
          />
        </div>
      </div>
      <div className="w-screen h-screen "></div>
    </div>
  );
};

export default Clubs;
