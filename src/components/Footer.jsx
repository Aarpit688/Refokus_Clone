import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl py-10 flex gap-32 mx-auto">
        <div className="w-1/2 flex flex-col gap-12">
          <h1 className="text-[12rem] leading-none font-medium tracking-tight">
            refokus.
          </h1>
          <div className="flex text-zinc-600 gap-10">
            <a href="">Privacy Policy</a>
            <a href="">Cookie Policy</a>
            <a href="">Impressum</a>
            <a href="">Terms</a>
          </div>
        </div>
        <div className="w-1/2 flex gap-4">
          <div className="w-1/3">
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {["Instagram", "Twitter (x?)", "LinkedIn"].map((elem, index) => (
              <a key={index} className="block mt-1 text-zinc-600 capitalize">
                {elem}
              </a>
            ))}
          </div>
          <div className="w-1/3">
            <h4 className="mb-10 text-zinc-500">Sitemap</h4>
            {["Home", "work", "careers", "contact"].map((elem, index) => (
              <a key={index} className="block mt-1 text-zinc-600 capitalize">
                {elem}
              </a>
            ))}
          </div>
          <div className="w-2/3 flex flex-col items-end mt-16">
            <p className="text-right leading-5">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className=" w-32 mt-5"
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
