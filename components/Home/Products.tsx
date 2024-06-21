"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import product_image1 from "../../assets/home/product image.png";
import Image from "next/image";
import { FC } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

const products = [
  {
    image: product_image1,
    title: "Beautya Capture Total Dreamskin Care & Perfect",
    description:
      "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
    price: "$76.00",
  },
  {
    image: product_image1,
    title: "Beautya Capture Total Dreamskin Care & Perfect",
    description:
      "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
    price: "$76.00",
  },
  {
    image: product_image1,
    title: "Beautya Capture Total Dreamskin Care & Perfect",
    description:
      "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
    price: "$76.00",
  },
  {
    image: product_image1,
    title: "Beautya Capture Total Dreamskin Care & Perfect",
    description:
      "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
    price: "$76.00",
  },
];

interface CustomArrowProps {
  onClick?: () => void;
}

const CustomPrevArrow: FC<CustomArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className=" bg-white text-black border-2 w-[40px] h-[40px] absolute left-[-10px] top-[300px] z-10 flex justify-center items-center"
  >
    <IoMdArrowDropleft size={26} />
  </button>
);

const CustomNextArrow: FC<CustomArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className=" bg-white text-black border-2 w-[40px] h-[40px] absolute right-[-10px] top-[300px] flex justify-center items-center"
  >
    <IoMdArrowDropright size={26} />
  </button>
);

const Products: FC = () => {
  const settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div>
      <p className=" w-full text-center text-[45px] font-semibold text-primary mb-[96px]">
        Products
      </p>
      <Slider {...settings} className=" w-[1224px] mx-auto relative">
        {products.map((product, i) => (
          <div key={i} className=" px-2">
            <div className=" border rounded-lg">
              <Image
                src={product.image}
                alt="img1"
                className=" w-full h-[384px]"
              />
              <div className=" flex flex-col gap-y-8 p-4">
                <p className=" text-[20px] text-[#A10550] font-bold">
                  {product.title}
                </p>
                <p className=" text-[14px] ">{product.description}</p>
                <p className=" text-[22px]">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Products;
