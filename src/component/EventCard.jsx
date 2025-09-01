import React from "react";

const EventCard = ({
  imageUrl,
  title,
  date,
  prize,
  registerLink,
  isVerified,
}) => {
  return (
    <div className="relative w-full max-w-sm mx-auto cursor-pointer group rounded-3xl p-3 overflow-hidden shadow-lg border border-gray-200 transition-transform duration-300 hover:shadow-xl">
      {/* Event Image */}
      <div className="overflow-hidden rounded-3xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover transform grayscale-0 group-hover:grayscale group-hover:scale-105 group-hover:translate-y-2 transition-all duration-500 ease-in-out"
        />
      </div>

      {/* Details Section */}
      <div className="p-4 font-[Poppins]">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold text-black flex items-center gap-1">
            {title}
            {isVerified && <span className="text-green-600 text-base">✔</span>}
          </h3>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-800">
          <div className="flex flex-col gap-1 text-sm">
            <span className="text-[13px]">
              DATE:- {new Date(date).toLocaleDateString("en-GB")}
            </span>
            <span className="text-[13px]">PRIZE:- {prize}</span>
          </div>
          <a
            href={registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium border border-black hover:bg-white hover:text-black transition-colors duration-200"
          >
            Register →
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
