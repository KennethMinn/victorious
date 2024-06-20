import Image from "next/image";
import React from "react";
import banner from "../../assets/home/home-banner.png";

const Banner = () => {
  return <Image src={banner} alt="banner" className=" w-full" />;
};

export default Banner;
