import React, { useRef, useEffect } from "react";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import Committee from "../assets/Committee.jpg";
import CommitteeInfo from "../component/CommitteeInfo.jsx";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cells = () => {
  const Move1Ref = useRef(null);

  useEffect(() => {
    gsap.to(Move1Ref.current, {
      scrollTrigger: {
        trigger: Move1Ref.current,
        start: "top 0%",
        end: "top 40%",
        scrub: 2,
      },
      x: 0,
      y: 440,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Title + Image Section */}
      <div className="md:w-[100vw] justify-evenly flex md:h-[150vh] pt-30 flex-col md:flex-row">
        {/* Heading */}
        <div
          ref={Move1Ref}
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="md:w-[47vw] flex text-5xl md:text-8xl font-bold justify-start items-start md:h-[85vh] z-[99] px-4 pt-10"
        >
          COMMITTEE
        </div>

        {/* Image */}
        <div className="md:w-[47vw] flex justify-center items-end md:h-[100vh] px-4">
          <img
            className="w-full object-cover"
            src={Committee}
            alt="Committee"
          />
        </div>
      </div>

      {/* Committee Info Section */}
      <CommitteeInfo />

      <Footer />
    </div>
  );
};

export default Cells;
