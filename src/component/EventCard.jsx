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
    <div className="w-[280px] mb-[5vh] rounded-3xl overflow-hidden shadow-md relative bg-white">
      {/* Event Image */}
      <img
        src="https://i.pinimg.com/736x/47/8c/66/478c66992d2f6d384fdf13529ecd0c75.jpg"
        alt={title}
        className="w-full h-96 object-cover"
      />

      {/* Bottom Overlay that blends */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 via-white/60 to-transparent px-4 py-3">
        <div className="flex items-center gap-2 font-semibold text-gray-900">
          {title}
          {isVerified && <span className="text-green-500 text-sm">✔️</span>}
        </div>

        <p className="text-sm text-gray-700">{organizer}</p>

        <div className="flex justify-between items-center mt-3">
          <div className="flex gap-4 text-sm text-gray-700">
            <span>📅 {date}</span>
            <span>🏆 {prize}</span>
          </div>
          <a
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 bg-white text-gray-800 text-sm rounded-full shadow hover:bg-gray-100 transition"
          >
            Register →
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
