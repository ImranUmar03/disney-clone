import React from "react";
import marvel from "./../Assets/marvel.png";
import nationalG from "./../Assets/nationalG.png";
import pixar from "./../Assets/pixar.png";
import starwar from "./../Assets/starwar.png";
import disney from "./../Assets/disney.png";

import Disney from "./../Videos/Disney.mp4";
import Marvel from "./../Videos/Marvel.mp4";
import nationalGe from "./../Videos/nationalGe.mp4";
import Pixar from "./../Videos/Pixar.mp4";
import star from "./../Videos/star.mp4";
function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: Disney,
    },
    {
      id: 2,
      image: nationalG,
      video: nationalGe,
    },
    {
      id: 3,
      image: pixar,
      video: Pixar,
    },
    {
      id: 4,
      image: starwar,
      video: star,
    },
    {
      id: 5,
      image: marvel,
      video: Marvel,
    },
  ];
  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {productionHouseList.map((item) => (
        <div className="border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 cursor-pointers relative shadow-lg shadow-gray-800">
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0 top-0 rounded-md opacity-0 hover:opacity-100"
          />
          <img src={item.image} className="w-full z-[1] " />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
