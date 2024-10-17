import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const products = [
    {
      title: "arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR AI",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2021",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: false,
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: true,
    },
    {
      title: "Silvr",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "summon",
      description:
        "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      live: true,
      case: true,
    },
  ];

  const [pos, setPos] = useState(0);

  const mover = (val) => setPos(val * 23);

  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} index={index} />
      ))}
      <div className="w-full h-full absolute top-0 pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
          className="window w-[32rem] h-[23rem] left-[43%] absolute overflow-hidden rounded-xl"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/arqitel-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/ttr-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yir2021-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/yahoo-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/rainfall-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/jungle-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/silvr-43.webm"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.2 }}
            className="w-full h-full bg-sky-500"
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              src="https://files.refokus.com/storage/v1/object/public/Portfolio%20Videos/summon-43.webm"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
