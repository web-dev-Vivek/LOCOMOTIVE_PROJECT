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
    }, 100); // 100ms delay to wait for DOM to settle

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
      className="min-h-screen bg-gray-100 py-10 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-3xl font-bold mb-8 text-center"
          data-scroll
          data-scroll-speed="1"
        >
          🚀 Upcoming Hackathons & Events
        </h1>

        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsList;
