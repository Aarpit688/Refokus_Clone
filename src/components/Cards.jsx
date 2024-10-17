import React from "react";
import Card from "./Card";

const Cards = () => {
  const cardData = [
    {
      firstHead: "Up Next: Culture",
      secondHead: "Who we are",
      width: "w-1/3",
      start: false,
      para: true,
      hover: false,
    },
    {
      firstHead: "Get In Touch",
      secondHead: `Let's get to it, together.`,
      width: "w-2/3",
      start: true,
      para: false,
      hover: true,
    },
  ];

  return (
    <div className="w-full ">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-1">
        {cardData.map((elem, index) => (
          <Card key={index} cardData={elem} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
