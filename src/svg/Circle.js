import React from "react";
import "./Circle.css";
const Circle = ({
  position,
  height,
  width,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
}) => {
  return (
    <svg
      width={386}
      height={386}
      viewBox="0 0 386 386"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="Circle"
      style={{
        top: position[0],
        right: position[1],
        bottom: position[2],
        left: position[3],
        height: height,
        width: width,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
        minHeight: minHeight,
        minWidth: minWidth,
        
      }}
    >
      <circle cx={193} cy={193} r={193} fill="url(#paint0_radial_1_2)" />
      <defs>
        <radialGradient
          id="paint0_radial_1_2"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(57 5.00002) rotate(55.1108) scale(410.845)"
        >
          <stop stopColor="#6100FF" />
          <stop offset="0.437979" stopColor="#8800FF" />
          <stop offset={1} stopColor="#D66BFF" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Circle;
