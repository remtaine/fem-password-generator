import React, { useState } from "react";

function Slider() {
  const [length, setLength] = useState(10);
  return (
    <div className="">
      <div className="flex justify-between">
        <label for="length" className="">
          Character Length
        </label>
        {/* TODO make # responsive */}
        <span className="text-fem-500">10</span>
      </div>
      <input
        type="range"
        id="length"
        min="0"
        max="20"
        // value="10"
        // step="1"
        className="w-full text-fem-500 bg-fem-500 appearance-none h-1 py-[2px] cursor-pointer "
      />
    </div>
  );
}

export default Slider;
