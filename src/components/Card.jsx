import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ cardData }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: cardData.hover && "#7443ff",
        padding: "30px",
      }}
      className={`${cardData.width} bg-zinc-800 p-5 rounded-xl min-h-[25rem] flex flex-col justify-between `}
    >
      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3>{cardData.firstHead}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">{cardData.secondHead}</h1>
      </div>
      <div className="w-full down">
        {cardData.start && (
          <>
            <h1 className="text-[7rem] font-medium leading-none">
              Start a Project
            </h1>
            <button className="px-5 py-2 rounded-full border-[1px] border-zinc-100 mt-5">
              Contact us
            </button>
          </>
        )}
        {cardData.para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
