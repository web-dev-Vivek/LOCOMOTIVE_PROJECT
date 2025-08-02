// src/pages/EventsList.jsx

import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import events from "../data/eventsData";
import EventCard from "../component/EventCard";

const EventsList = () => {
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null); // To store scroll instance

  useEffect(() => {
    const timeout = setTimeout(() => {
      locoScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.07,
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (locoScrollRef.current) locoScrollRef.current.destroy();
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      data-scroll
      data-scroll-speed="-5"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
            data-scroll
            data-scroll-speed="1"
          >
            🚀 Upcoming Hackathons & Events
          </h1>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            data-scroll
            data-scroll-speed="0.5"
          >
            Discover amazing opportunities to showcase your skills, learn new
            technologies, and win exciting prizes
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          data-scroll
          data-scroll-speed="0.3"
        >
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsList;
