import { motion } from "framer-motion";
import React, { useState } from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Start a Project" }) => {
  const [pos, setPos] = useState(0);

  const animation = (val) => {
    setPos(val);
  };

  return (
    <motion.div
      onMouseEnter={() => animation(-140)}
      onMouseLeave={() => animation(0)}
      className="w-40 h-9 px-4 py-2 bg-zinc-100 text-black rounded-full cursor-pointer overflow-hidden flex flex-col gap-2"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: pos + "%" }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
        className=" flex items-center justify-between "
      >
        <motion.span className="text-sm font-medium">{title}</motion.span>
        <IoIosReturnRight />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: pos + "%" }}
        transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
        className=" flex items-center justify-between "
      >
        <motion.span className="text-sm font-medium">{title}</motion.span>
        <IoIosReturnRight />
      </motion.div>
    </motion.div>
  );
};

export default Button;
