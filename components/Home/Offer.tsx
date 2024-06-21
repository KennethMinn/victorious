import React from "react";
import offer from "../../assets/home/offer.png";
import Image from "next/image";

const Offer = () => {
  return (
    <div className="h-[382px] bg-[#fbeff2] flex justify-center gap-16">
      <Image src={offer} alt="offer" className=" w-[575px] h-[382px]" />
      <div className=" flex flex-col justify-center">
        <p className=" font-bold text-[24px]">Special Offers</p>
        <p className=" text-[#A10550] font-bold text-[32px]">Save up to 50%</p>
        <div className=" text-[16px]">
          <p>Mother&lsquo;s Day is coming! </p>
          <p>
            For everything she&lsquo;s given you, it&lsquo;s time to give back.
            Shower her with love,{" "}
          </p>
          <p>happiness, and the best of Beautya. </p>
          <p className=" font-bold text-[#A10550]">
            visit your local beautya branches to find out more about our special
            <br />
            offers in make up and skincare products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
