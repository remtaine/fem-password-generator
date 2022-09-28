import React, { useState } from "react";

function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type="checkbox"
      onChange={() => {
        setChecked(!checked);
      }}
      className={
        "accent-fem-500 scale-125 bg-fem-300 text-fem-100 border border-solid border-2 border-fem-500" +
        " " +
        (checked ? "" : "")
      }
    />

    // TODO change border to outline

    // <button
    //   onClick={() => {
    //     setChecked(!checked);
    //   }}
    //   className={
    //     "flex items-center justify-center w-[10px] h-[10px] outline outline-[1.5px]" +
    //     " " +
    //     (checked ? "bg-fem-500 outline-fem-500" : "outline-fem-300")
    //   }
    // >
    //   <i
    //     className={
    //       "fa-solid fa-check text-[8px] text-fem-400" +
    //       " " +
    //       (checked ? "block" : "hidden")
    //     }
    //   ></i>
    // </button>
  );
}

export default Checkbox;
