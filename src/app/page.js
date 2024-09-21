import React from "react";
import "./Home.css"; // Import custom CSS file for the water flow animation
import Link from "next/link";
import SideBar from "./components/SideBar";
import ImageSlider from "./components/ImageSlider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
  return (
    <div className="px-32">
      <div className="flex w-full h-full pb-44">
        <div className="w-[15%] bg- h-[550px]">
          <SideBar />
        </div>
        <div className="w-[85%]  pl-10 pt-10 bg- h-[550px]">
          <ImageSlider />
        </div>
      </div>
      <div className="pt-5 h-screen">
        <div className="flex gap-4 items-center mb-8">
          <div className="h-20 w-10 rounded-lg bg-orange-400"></div>
          <div className="font-bold text-orange-400 text-2xl">Fridays</div>
        </div>

        <div className="flex  items-end justify-between">
          <div className="flex space-x-28 items-end">

          <div className="text-6xl font-bold">Auction</div>
          <div className="flex space-x-4 items-end">
            {/* Days */}
            <div className="text-center">
              <div className="text-lg font-semibold">Days</div>
              <div className="text-5xl font-bold ">100</div>
            </div>

            {/* Colon */}
            <div className="text-5xl text-orange-400  ">:</div>

            {/* Hours */}
            <div className="text-center">
              <div className="text-lg font-semibold">Hours</div>
              <div className="text-5xl font-bold">20</div>
            </div>

            {/* Colon */}
            <div className="text-5xl font- text-orange-400">:</div>

            {/* Minutes */}
            <div className="text-center">
              <div className="text-lg font-semibold">Minutes</div>
              <div className="text-5xl font-bold">45</div>
            </div>

            {/* Colon */}
            <div className="text-5xl font- text-orange-400">:</div>

            {/* Seconds */}
            <div className="text-center">
              <div className="text-lg font-semibold">Seconds</div>
              <div className="text-5xl font-bold">32</div>
            </div>
          </div>
          </div>

          <div className="flex gap-5">
            <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">
              <ArrowBackIcon />
            </div>
            <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center">
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
