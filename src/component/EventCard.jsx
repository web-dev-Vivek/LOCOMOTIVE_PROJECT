// src/components/EventCard.jsx

import React from "react";

const EventCard = ({
  imageUrl,
  title,
  date,
  organizer,
  prize,
  registerLink,
  isVerified,
}) => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-md group">
      {/* Event Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Bottom Overlay with White Blend */}
      <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-white/70 backdrop-blur-sm backdrop-saturate-150">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-base font-semibold text-gray-900 flex items-center gap-1">
            {title}
            {isVerified && <span className="text-green-500 text-sm">✔️</span>}
          </h3>
        </div>

        <p className="text-xs text-gray-700 mb-2">{organizer}</p>

        <div className="flex justify-between items-center text-sm text-gray-800">
          <div className="flex gap-3 text-sm">
            <span>📅 {new Date(date).toLocaleDateString("en-GB")}</span>
            <span>🏆 {prize}</span>
          </div>
          <a
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-600 border border-blue-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Register →
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
