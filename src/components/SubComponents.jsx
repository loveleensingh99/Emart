import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { useEffect, useState } from "react";
export const Heading = ({ text }) => {
  return (
    <h3 className="mb-8 text-2xl font-bold leading-none tracking-tighter text-center text-neutral-600 md:text-4xl lg:text-3xl">
      {text || "Type Heading Here"}
    </h3>
  );
};

export const Star = ({ stars, reviews }) => {
  const yellowStar = Math.floor(stars);
  const arr = [];

  for (let i = 0; i < yellowStar; i++) {
    arr.push(1);
  }

  for (let i = yellowStar; i < 5; i++) {
    arr.push(0);
  }

  return (
    <>
      {arr.map((ele) => {
        if (ele) {
          return <FaStar className="text-lg text-yellow-500" />;
        } else {
          return <AiOutlineStar className="text-xl text-yellow-500" />;
        }
      })}
    </>
  );
};

export const SelectColor = ({ colors, onColorUpdate }) => {
  const [selectedcolor, setSelectedcolor] = useState(colors[0]);

  const handleColorSelect = (colorCode) => {
    setSelectedcolor(colorCode);
    onColorUpdate(colorCode);
  };

  return (
    <>
      <div className="flex space-x-2">
        {colors.map((colorCode) => (
          <button
            className={`inline-flex items-center justify-center p-1 rounded-full  ${
              selectedcolor === colorCode ? "border border-gray-300" : ""
            }`}
            key={colorCode}
            onClick={() => handleColorSelect(colorCode)}
          >
            <div
              className={`w-6 h-6 rounded-full  `}
              style={{ backgroundColor: colorCode }}
            ></div>
          </button>
        ))}
      </div>
    </>
  );
};

export const SelectColorS = ({ price, colors }) => (
  <>
    <h1>
      Hello Hello{price}
      {colors.map((colorCode) => (
        <button
          className="inline-flex items-center justify-center p-1 border border-gray-300 rounded-full"
          key={colorCode}
        >
          {colorCode}
          {/* <div className={`w-6 h-6 rounded-full bg-[${colorCode}`}></div> */}
        </button>
      ))}
    </h1>
  </>
);
