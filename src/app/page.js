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
import { LocalShipping, SupportAgent, MonetizationOn } from '@mui/icons-material'; // MUI Icons

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

      <div className="pt-5 h-full">
        <div className="flex gap-4 items-center mb-8">
          <div className="h-20 w-10 rounded-lg bg-orange-400"></div>
          <div className="font-bold text-orange-400 text-2xl">Featured</div>
        </div>

        <div className="flex  items-end justify-between pb-10">
          <div className="flex space-x-28 items-end">
            <div className="text-6xl font-bold">New Arrival</div>
          </div>
        </div>
        <div className="flex h-[800px]">
      {/* Left Half - First Card */}
      <div className="w-1/2 p-4">
        <div className="bg-blue-500 h-full rounded-lg shadow-lg relative">
          <div className="w-full h-full">
            <img
              src="./newArrival/ps4.png"
              alt="Card 1"
              className="object-contain rounded-lg h-full w-full aspect-video"
            />
          </div>
          {/* Name, Description, and Button */}
          <div className="absolute bottom-10 left-10 text-left">
            <h3 className="text-4xl font-bold pb-5 text-white">PlayStation 4</h3>
            <p className="text-xl text-white pb-5">Next-gen gaming console with powerful features.</p>
            <button className="mt-2 px- py-2 bg- text-white rounded-lg underline text-2xl  transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Big Card on Top and Two Cards Below */}
      <div className="w-1/2 p-4 flex flex-col space-y-4">
        {/* Big Card */}
        <div className=" flex-1 h-1/2 rounded-lg shadow-lg relative bg-blue-500">
          <div className="w-full h-full flex items-center justify-end">
            <img
              src="./newArrival/womenClothing.png"
              alt="Card 2"
              className="object-contain rounded-lg w-3/4 h-full aspect-video"
            />
          </div>
          {/* Name, Description, and Button */}
          <div className="absolute bottom-4 left-4 text-left ">
            <h3 className="text-2xl font-bold pb-2 text-white">Women Clothing</h3>
            <p className="text-xl text-white pb-2">Trendy and fashionable outfits for every occasion.</p>
            <button className="mt-2 px- py-2 bg- text-white rounded-lg underline text-2xl hover:bg-white hover:text-blue-500 transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="flex space-x-4 h-1/2">
          <div className="bg-blue-500 w-1/2 rounded-lg shadow-lg relative">
            <div className="w-full h-full">
              <img
                src="./newArrival/amazonSpeaker.png"
                alt="Card 3"
                className="object-contain rounded-lg w-full h-full aspect-square"
              />
            </div>
            {/* Name, Description, and Button */}
            <div className="absolute bottom-10 left-10 text-left">
              <h3 className="text-2xl font-bold pb-2 text-white">Amazon Speaker</h3>
              <p className="text-xl text-white pb-2">Smart speaker with Alexa voice assistant.</p>
              <button className="mt-2 px- py-2 bg-blue-500 text-white rounded-lg underline text-2xl hover:bg-white hover:text-blue-500 transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
          <div className="bg-blue-500 w-1/2 rounded-lg shadow-lg relative">
            <div className="w-full h-full">
              <img
                src="./newArrival/perfume.png"
                alt="Card 4"
                className="object-contain rounded-lg w-full h-full aspect-square"
              />
            </div>
            {/* Name, Description, and Button */}
            <div className="absolute bottom-10 left-10 text-left">
              <h3 className="text-2xl font-bold pb-2 text-white">Perfume</h3>
              <p className="text-xl text-white pb-2">Long-lasting fragrance with exotic scents.</p>
              <button className="mt-2 px- py-2 bg-blue-500 text-white rounded-lg underline text-2xl hover:bg-white hover:text-blue-500 transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>

      <div className="flex justify-around items-start py-10 bg-gray-100">
      {/* First Column */}
      <div className="flex flex-col items-center w-1/3 text-center p-4">
        <LocalShipping className="text-blue-500" style={{ fontSize: '60px', marginBottom: '16px' }} /> {/* Icon */}
        <h3 className="text-2xl font-bold mb-2">FAST AND SECURE DELIVERY</h3> {/* Title */}
        <p className="text-gray-700">Delivery available across the country</p> {/* Description */}
      </div>

      {/* Second Column */}
      <div className="flex flex-col items-center w-1/3 text-center p-4">
        <SupportAgent className="text-blue-500" style={{ fontSize: '60px', marginBottom: '16px' }} /> {/* Icon */}
        <h3 className="text-2xl font-bold mb-2">24/7 CUSTOMER SERVICE</h3> {/* Title */}
        <p className="text-gray-700">Friendly 24/7 customer support</p> {/* Description */}
      </div>

      {/* Third Column */}
      <div className="flex flex-col items-center w-1/3 text-center p-4">
        <MonetizationOn className="text-blue-500" style={{ fontSize: '60px', marginBottom: '16px' }} /> {/* Icon */}
        <h3 className="text-2xl font-bold mb-2">MONEY BACK GUARANTEE</h3> {/* Title */}
        <p className="text-gray-700">We return money within 30 days</p> {/* Description */}
      </div>
    </div>
      
    </div>
  );
}
