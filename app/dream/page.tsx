"use client";
import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BrowserBar from "../../components/BrowserBar";

import defaultImage from "../../public/generatedpic (1).png"; // Import the default image

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageUrl, setCurrentImageUrl] = useState("/generatedpic (1).png"); // Set default image

  const carouselImages = ["/generatedpic (1).png", "/generatedpic (2).png", "/generatedpic (3).png"];

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-40 max-w-8xl">
      <Header />
      <main className="flex flex-1 px-3 mt-4 mb-8 ">
        <BrowserBar />
        <div className="flex flex-col items-center justify-center w-full mx-20 bg-gray-300 bg-opacity-70 rounded-2xl">
          <img src={currentImageUrl} alt="Displayed Image" className=" mx-52 object-contain w-80% h-80%" />
          <br />
          <br />
          <div className="flex mt-4 overflow-x-auto bg-gray-500 bg-opacity-50">
            {carouselImages.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Carousel Image ${index}`}
                className="object-contain w-1/4 h-24 mx-2 cursor-pointer"
                onClick={() => setCurrentImageUrl(url)}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
