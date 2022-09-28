import React, { useState } from "react";

function Slider() {
  const [length, setLength] = useState(10);
  return (
    <div className="">
      <div className="flex justify-between">
        <label htmlFor="length" className="">
          Character Length
        </label>
        {/* TODO make # responsive */}
        <span className="text-fem-500">{length}</span>
      </div>
      <input
        type="range"
        id="length"
        min="0"
        max="20"
        defaultValue="10"
        // step="1"
        // style={{ fill-color: "red"  }}
        onInput={(evt) => {
          setLength(evt.target.value);
          // setLength(this.value);
        }}
        className="w-full accent-fem-500 py-[2px] cursor-pointer pt-1"
      />
    </div>
  );
}

export default Slider;
