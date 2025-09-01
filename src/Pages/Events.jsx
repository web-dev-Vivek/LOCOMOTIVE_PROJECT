import React, { useRef, useEffect, useState } from "react";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import EventCard from "../component/EventCard.jsx";
import eventsData from "../data/eventsData.js";
import Eventimg from "../assets/Event.jpg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ✅ Correct import
import Lenis from "@studio-freight/lenis"; // ✅ Import Lenis

gsap.registerPlugin(ScrollTrigger);

function Events() {
  const MoveRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const categories = ["All", ...new Set(eventsData.map((e) => e.category))];

  useEffect(() => {
    // ✅ Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    // RAF loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // ✅ GSAP Animation
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

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredEvents(eventsData);
    } else {
      setFilteredEvents(
        eventsData.filter((e) => e.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div
        id="event"
        className="md:min-h-screen mt-5 flex flex-col px-6 py-10 bg-white"
      >
        <h1
          ref={MoveRef}
          className="text-4xl hidden md:block md:text-9xl font-bold text-end"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Events
        </h1>
        <h1
          className="text-4xl md:hidden block md:text-9xl font-bold flex justify-center text-center "
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Events
        </h1>
        <img
          className="w-full md:w-[40vw] md:h-[35vw]"
          src={Eventimg}
          alt="Events Header"
        />
      </div>

      {/* Filter Buttons */}
      <div className="px-6 pb-4 flex flex-wrap gap-3 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:bg-gray-400 hover:text-white hover:border-none hover:scale-[1.1]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Event Cards Grid */}
      <div className="grid md:grid-cols-4 mb-40 gap-10 px-6 py-10">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              imageUrl={event.imageUrl}
              title={event.title}
              date={event.date}
              organizer={event.organizer}
              prize={event.prize}
              registerLink={event.registerLink}
              isVerified={event.isVerified}
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-sm">
            No events found in this category.
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Events;
