import React from "react";

const TalkBalloon = ({ children }) => {
  return (
    <div className="relative bg-[#dadada] rounded-lg p-4 shadow-md">
      <div className="absolute w-0 h-0" style={{ top: "10%", left: "-10px", transform: "translateY(-50%)" }}>
        <svg
          className="absolute text-[#dadada] w-6 h-6 transform rotate-[-0.375turn]"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M0 0 L20 0 L20 20 Z" />
        </svg>
      </div>
      {children}
    </div>
  );
};

export default TalkBalloon;
