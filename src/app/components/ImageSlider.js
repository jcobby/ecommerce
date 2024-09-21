"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required Swiper modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

function ImageSlider() {
  const images = [
    "/categoryimages/toys.png",

    "/categoryimages/bag.jpeg",
    "/categoryimages/sneakers.png",
    "/categoryimages/phones.png",
    "/categoryimages/smartwatches.png",
    "/categoryimages/tablets.png",
    "/categoryimages/phones.png",
  ];

  return (
    <div className=" w-full h-full bg- rounded-2xl">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        navigation={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000,disableOnInteraction: false, }} // Slide change every 3 seconds
        loop={true} // Infinite loop
className="h-full"
        
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="bg- h-full flex justify-center items-center rounded-2xl">

            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-contain " // Set object-cover for proper image scaling
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
