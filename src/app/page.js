"use client";

import React, { useState } from "react";
import "./Home.css"; // Import custom CSS file for the water flow animation
import Link from "next/link";
import SideBar from "./components/SideBar";
import ImageSlider from "./components/ImageSlider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "./components/ProductCard";
import products from "./products";
import CategoriesCard from "./components/CategoriesCard";
import CategoriesTypes from "./categoriesTypes";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexCat, setCurrentIndexCat] = useState(0);

  const visibleItems = 4;
  const visibleItemsCat = 6;

  const handleNext = () => {
    if (currentIndex < products.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextCat = () => {
    if (currentIndexCat < CategoriesTypes.length - visibleItemsCat) {
      setCurrentIndexCat(currentIndexCat + 1);
    }
  };

  const handlePrevCat = () => {
    if (currentIndexCat > 0) {
      setCurrentIndexCat(currentIndexCat - 1);
    }
  };

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
            <div
              className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer"
              onClick={handlePrev}
            >
              <ArrowBackIcon />
            </div>
            <div
              className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer"
              onClick={handleNext}
            >
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
        <div className="py-14 flex gap-10 overflow-hidden bg- justify-center w-full">
          {products
            .slice(currentIndex, currentIndex + visibleItems)
            .map((item, index) => (
              <ProductCard
                key={index}
                image={item.imageUrl}
                name={item.name}
                price={item.price}
                discount={item.discount}
                rating={item.rating}
              />
            ))}
        </div>
        <div className="flex items-center justify-center  ">
          <button className="bg-orange-400 px-16 py-6 text-xl text-white font-bold rounded-xl hover:opacity-80">
            View All Products
          </button>
        </div>
        <div class="h-px bg-gray-300 w-full my-10"></div>
      </div>

      <div className="pt-5 h-">
        <div className="flex gap-4 items-center mb-8">
          <div className="h-20 w-10 rounded-lg bg-orange-400"></div>
          <div className="font-bold text-orange-400 text-2xl">Category</div>
        </div>

        <div className="flex  items-end justify-between">
          <div className="flex space-x-28 items-end">
            <div className="text-6xl font-bold">Browse By Category</div>
          </div>

          <div className="flex gap-5">
            <div
              className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer"
              onClick={handlePrevCat}
            >
              <ArrowBackIcon />
            </div>
            <div
              className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center cursor-pointer"
              onClick={handleNextCat}
            >
              <ArrowForwardIcon />
            </div>
          </div>
        </div>
        <div className="py-14 flex gap-10 overflow-hidden bg- justify-center w-full">
          {CategoriesTypes.slice(
            currentIndexCat,
            currentIndexCat + visibleItemsCat
          ).map((item, index) => (
            <CategoriesCard
              key={index}
              image={item.image}
              category={item.category}
            />
          ))}
        </div>

        <div class="h-px bg-gray-300 w-full my-10"></div>
      </div>

      <div className="pt-5 h-screen">
        <div className="flex gap-4 items-center mb-8">
          <div className="h-20 w-10 rounded-lg bg-orange-400"></div>
          <div className="font-bold text-orange-400 text-2xl">This Month</div>
        </div>

        <div className="flex  items-end justify-between">
          <div className="flex space-x-28 items-end">
            <div className="text-6xl font-bold">Best Selling Products</div>
          </div>
          <div className="flex items-center justify-center  ">
            <button className="bg-orange-400 px-10 py-6 text-xl text-white font-bold rounded-xl hover:opacity-80">
              View All Products
            </button>
          </div>
        </div>
        <div className="py-14 flex gap-10 overflow-hidden bg- justify-center w-full">
          {products
            .slice(currentIndex, currentIndex + visibleItems)
            .map((item, index) => (
              <ProductCard
                key={index}
                image={item.imageUrl}
                name={item.name}
                price={item.price}
                discount={item.discount}
                rating={item.rating}
              />
            ))}
        </div>
      </div>

      <div className="w-full bg-blue-500 h- p-20 flex">
        <div className="w-1/2">
          <h3 className="text-orange-400 text-2xl font-bold pb-10">
            Categories
          </h3>
          <h1 className="text-white text-6xl pb-10">
            Enhance Your Musice Experience
          </h1>
          <div className="flex gap-10 pb-14">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex flex-col items-center justify-center ">
              <div className="font-bold text-lg">23</div>
              <div className="">Hours</div>
            </div>
            <div className="w-20 h-20 rounded-full bg-gray-300 flex flex-col items-center justify-center ">
              <div className="font-bold text-lg">05</div>
              <div className="">Days</div>
            </div>
            <div className="w-20 h-20 rounded-full bg-gray-300 flex flex-col items-center justify-center ">
              <div className="font-bold text-lg">59</div>
              <div className="">Minutes</div>
            </div>
            <div className="w-20 h-20 rounded-full bg-gray-300 flex flex-col items-center justify-center ">
              <div className="font-bold text-lg">35</div>
              <div className="">Seconds</div>
            </div>
          </div>
          <button className="bg-orange-400 px-14 py-5 text-xl text-white font-bold rounded-lg hover:opacity-80">
            Buy Now!
          </button>{" "}
        </div>
        <img src="/categoryimages/jbl.png" alt="hello" className="w-1/2 h-" />
      </div>

      <div className="pt-5 h-">
        <div className="flex gap-4 items-center mb-8">
          <div className="h-20 w-10 rounded-lg bg-orange-400"></div>
          <div className="font-bold text-orange-400 text-2xl">Our Products</div>
        </div>

        <div className="flex  items-end justify-between">
          <div className="flex space-x-28 items-end">
            <div className="text-6xl font-bold">Explore Our Products</div>
          </div>
        </div>
        <div className="py-14 flex gap-10 overflow-hidden bg- justify-center w-full">
          {products.slice(0, 4).map((item, index) => (
            <ProductCard
              key={index}
              image={item.imageUrl}
              name={item.name}
              price={item.price}
              discount={item.discount}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="py-14 flex gap-10 overflow-hidden bg- justify-center w-full">
          {products.slice(5, 9).map((item, index) => (
            <ProductCard
              key={index}
              image={item.imageUrl}
              name={item.name}
              price={item.price}
              discount={item.discount}
              rating={item.rating}
            />
          ))}
        </div>
        <div className="flex items-center justify-center  ">
          <button className="bg-orange-400 px-16 py-6 text-xl text-white font-bold rounded-xl hover:opacity-80">
            View All Products
          </button>
        </div>
      </div>

      <div className="pt-5 h-">
        <div className="flex gap-4 items-center mb-8">
          <div className="h-20 w-10 rounded-lg bg-orange-400"></div>
          <div className="font-bold text-orange-400 text-2xl">Featured</div>
        </div>

        <div className="flex  items-end justify-between">
          <div className="flex space-x-28 items-end">
            <div className="text-6xl font-bold">New Arrival</div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="w-full col-span-1 bg-blue-500 h-44"></div>
          <div className="grid col-span-2 grid-row-2 w-full h-28">
            <div className="row-span-1 w-full bg-yellow-400"></div>
            <div className="grid row-span-2 grid-cols-2 w-full">
              <div className="col-span-1 bg-green-500 w-full"></div>

              <div className="col-span-2 bg-red-500 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
