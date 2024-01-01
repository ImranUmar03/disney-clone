import React, { useState } from "react";
import logo from "./../Assets/logo.png";
import Avatar from "./../Assets/Avatar.jpg";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlus,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiDotsVertical } from "react-icons/hi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import Headeritem from "./Headeritem";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      name: "ORIGNALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex items-center justify-between lg:justify-start w-full lg:gap-8">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
          alt="logo"
        />
        <div className="flex">
          <div className="hidden lg:flex gap-8">
            {menu.map((item, index) => (
              <Headeritem name={item.name} Icon={item.icon} keyValue={index} />
            ))}
          </div>
          <div className="flex lg:hidden gap-5">
            {menu.map(
              (item, index) =>
                index < 3 && (
                  <Headeritem name={""} Icon={item.icon} keyValue={index} />
                )
            )}
            <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
              <Headeritem name={""} Icon={HiDotsVertical} />
              {toggle ? (
                <div className="absolute right-20 mt-1 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                  {menu.map(
                    (item, index) =>
                      index > 2 && (
                        <Headeritem
                          name={item.name}
                          Icon={item.icon}
                          keyValue={index}
                        />
                      )
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={Avatar} className="w-[40px] rounded-full" alt="avatar" />
      </div>
    </div>
  );
}

export default Header;
