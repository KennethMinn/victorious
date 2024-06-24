"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import certificate_1_0 from "../../assets/aboutus/certificate_1.0.png";

type CardProps = {
  src: StaticImageData;
  alt: string;
  index: number;
};

const Card = ({ src, alt, index }: CardProps) => (
  <div
    className={`transition-all duration-500 cursor-pointer ${
      index === 1 ? "w-[500px] h-[500px]" : "w-[200px] h-[200px]"
    }`}
  >
    <Image src={src} alt={alt} className="object-cover w-full h-full" />
  </div>
);

const CardCarousel = () => {
  const cards = [
    { src: certificate_1_0, alt: "Certificate1" },
    { src: certificate_1_0, alt: "Certificate2" },
    { src: certificate_1_0, alt: "Certificate3" },
  ];

  // const handleCardClick = (index: number) => {
  //   setActiveIndex(index);
  // };

  return (
    <div className="flex justify-center gap-x-[40px] items-center relative w-full h-[300px] my-[150px]">
      {cards.map((card, index) => (
        <Card key={index} src={card.src} alt={card.alt} index={index} />
      ))}
    </div>
  );
};

export default CardCarousel;
