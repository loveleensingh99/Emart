import React from "react";
import { useState } from "react";

export default function ProductImages({ images = [{ url: "" }] }) {
  const [mainImg, setmainImg] = useState(images[0]);

  return (
    <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
      <div className="flex -mx-4 flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
        <div className="w-full sm:w-auto min-w-max px-4 text-center flex   sm:flex-col items-center justify-center">
          {images.map((curEle, index) => (
            <img
              src={curEle.url}
              alt={curEle.filename}
              className="pb-2 cursor-pointer md:w-32"
              key={index}w
              onClick={() => {
                setmainImg(curEle);
              }}
            />
          ))}
        </div>
        <div className="w-full sm:w-9/12 px-4">
          <img className="mb-5 w-full" src={mainImg.url} alt={mainImg.filename} />
          {/* <p className="text-sm text-gray-300">Roll over image to zoom in</p> */}
        </div>
      </div>
    </div>
  );
}
