"use client";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import TypistAnim from "../components/TypistAnim";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
//import { useLanguage } from "../components/languageProvider";
import Card from "../components/card";

const images = Array.from({ length: 13 }, (_, i) => `/generatedpic (${i + 1}).png`);

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  // const [lang, setLang] = useLanguage();
  const handleChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 mx-40 max-w-8xl">
      <Header />
      <main className="flex flex-col flex-1 w-full px-4 sm:mt-20 background-gradient">
        <div className="flex justify-between w-full mt-32">
          <div className="flex flex-col justify-center flex-1 px-20 mr-1 text-left">
            <h1 className="px-4 ml-10 text-5xl font-bold tracking-normal text-gray-800 font-display sm:text-5xl">
              <span className="relative text-green-600 whitespace-nowrap sm:text-6xl">
                <SquigglyLines />
                <span className="relative"> JL-EasyAI</span>
              </span>{" "}
              <br />
              <br />
              Architectural Images
              <br />
              <TypistAnim />
            </h1>

            {/* Bullet-pointed h2s */}
            <br />
            <div className="flex items-start mt-6 ml-20">
              <Image src="/vercelLogo.svg" width={25} height={15} alt="Bullet Point" />
              <h2 className="max-w-xl ml-3 text-2xl leading-7 text-gray-800">
                Create <b>Architectural images</b> <br /> from text, image, sketch in under a minute
              </h2>
            </div>

            <div className="flex items-start mt-6 ml-20">
              <Image src="/vercelLogo.svg" width={25} height={15} alt="Bullet Point" />
              <h2 className="max-w-xl ml-3 text-2xl leading-7 text-gray-800">
                Our Architectural <b>AI image models</b> <br />
                are specifically trained to Architectural images
              </h2>
            </div>

            <div className="flex items-start mt-6 ml-20">
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

          <div className="relative flex flex-col justify-center flex-1 mr-16">
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

      <div className="w-full px-4 mt-60 mb-100 min-h-[400px]">
        {" "}
        {/* increased margin-top and added min-height */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="About JL-EasyAI Architectural Images"
            content="Our AI-powered platform allows you to create architectural images with unparalleled accuracy and precision."
          />
          <Card title="Precision and Quality" content="Dive deep into the world of architectural design with our state-of-the-art AI models." />
          <Card title="From Concept to Visualization" content="From concept to final visualization, make your architectural dreams come true with EasyAI." />
          <Card
            title="About EasyAI Architectural Images"
            content="Our AI-powered platform allows you to create architectural images with unparalleled accuracy and precision."
          />
          <Card title="Precision and Quality" content="Dive deep into the world of architectural design with our state-of-the-art AI models." />
          <Card title="From Concept to Visualization" content="From concept to final visualization, make your architectural dreams come true with EasyAI." />
        </div>
        <div className="w-full px-40 mt-40 min-h-[400px]">
          {/* ... other content ... */}
          <div className="my-20">
            <h2 className="font-bold text-center mb-14 sm:text-6xl">AI Transforms Sketches to Realistic Architectures</h2>
            <BeforeAfterSlider beforeImage="/before.png" afterImage="/after.png" label="Slide to view the transformation" />
          </div>
          <div className="px-6 mt-10 text-center">
            <h3 className="mb-4 text-3xl font-bold">Utilizing ControlNet</h3>
            <p className="mb-6 text-xl">
              Our advanced AI system, utilize ControlNet, transforms sketches into high-quality architectural images in mere moments. <br />
              The transformation process utilizes cutting-edge algorithms and state-of-the-art techniques to ensure the highest quality output.
            </p>
            <h3 className="mb-4 text-3xl font-bold">Integrated OpenAI</h3>
            <p className="mb-6 text-xl">
              We're also integrating with Chat GPT, OpenAI API, enhancing our system capabilities. <br />
              With the help of AI-assisted prompt engineering, user inputs are refined and optimized to generate superior architectural visualizations.
              <br />
              This ensures that what you envision is translated into a refined architectural masterpiece.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
