import React, { useState } from "react";
import Button from "./Button";

const Product = ({ val, mover, index }) => {
  const [bg, setBg] = useState("#18181B");

  const changeBg = (index) => {
    if (index === 0) {
      setBg("#5355ED");
    } else if (index === 1) {
      setBg("#46289A");
    } else if (index === 2) {
      setBg("#382865");
    } else if (index === 3) {
      setBg("#7E1FFF");
    } else if (index === 4) {
      setBg("#1A30D4");
    } else if (index === 5) {
      setBg("#1C12FE");
    } else if (index === 6) {
      setBg("#F57549");
    } else if (index === 7) {
      setBg("#22636D");
    }
  };

  return (
    <div
      onMouseEnter={() => {
        mover(index);
        changeBg(index);
      }}
      onMouseLeave={() => {
        setBg("#18181B");
      }}
      style={{ backgroundColor: bg }}
      className={`w-full h-[23rem] py-20 text-white easy-in-out duration-300`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
