"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";
import TypistAnim from "../components/TypistAnim";
//import { useLanguage } from "../components/languageProvider";

const images = Array.from({ length: 13 }, (_, i) => `/generatedpic (${i + 1}).png`);

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [lang, setLang] = useLanguage();
  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-40 max-w-8xl">
      <Header />
      <main className="flex flex-1 w-full px-4 mt-20 sm:mt-20 background-gradient">
        <div className="flex justify-between w-full mr-20">
          <div className="flex flex-col justify-center flex-1 px-4 mr-20 text-left">
            <h1 className="max-w-4xl px-4 mx-auto text-5xl font-bold tracking-normal text-gray-800 font-display sm:text-5xl">
              <span className="relative text-green-600 whitespace-nowrap sm:text-6xl">
                <SquigglyLines />
                <span className="relative"> EasyAI</span>
              </span>{" "}
              <br />
              <br />
              Architectural Images
              <br />
              <TypistAnim />
            </h1>

            {/* Bullet-pointed h2s */}
            <br />
            <div className="flex items-start mt-6 ml-40">
              <Image src="/vercelLogo.svg" width={25} height={15} alt="Bullet Point" />
              <h2 className="max-w-xl ml-3 text-2xl leading-7 text-gray-800">
                Create <b>Architectural images</b> <br /> from text, image, sketch in under a minute
              </h2>
            </div>

            <div className="flex items-start mt-6 ml-40">
              <Image src="/vercelLogo.svg" width={25} height={15} alt="Bullet Point" />
              <h2 className="max-w-xl ml-3 text-2xl leading-7 text-gray-800">
                Our Architectural <b>AI image models</b> <br />
                are specifically trained to Architectural images
              </h2>
            </div>

            <div className="flex items-start mt-6 ml-40">
              <Image src="/vercelLogo.svg" width={25} height={15} alt="Bullet Point" />
              <h2 className="max-w-xl ml-3 text-2xl leading-7 text-gray-800">
                Save images and <b>Share with others on board page</b>
              </h2>
            </div>

            <br />
            <br />
            <Link
              className="flex px-5 py-4 ml-auto space-x-2 text-sm font-medium text-white transition bg-green-600 border border-green-600 rounded-full shadow-md justify-right items-right max-w-fit hover:bg-green-500"
              href="/dream"
            >
              Generate your dream architecture
            </Link>
          </div>

          <div className="relative flex flex-col justify-center flex-1">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} selectedItem={currentIndex} onChange={handleChange}>
              {images.map((imgSrc, index) => (
                <div key={index}>
                  <img src={imgSrc} alt={`Carousel Image ${index}`} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}