import Image from "next/image";
import React from "react";
import avatar from "../../assets/home/ksh.png";

const Review = () => {
  return (
    <div className="bg-pinky bg-cover bg-center h-[980px]">
      <div className=" w-full text-center text-[45px] font-semibold text-[#714031]">
        Our Customer&apos;s Reviews
      </div>
      <div className=" w-full text-center text-[16px] font-semibold text-[#6C87AE] ">
        Customer Real Review On Us
      </div>
      <div className="flex flex-col gap-y-10 mt-[54px]">
        <div className=" flex gap-10 justify-center ">
          <div className=" bg-white w-[455px] h-[258px] shadow-md rounded-3xl px-5 flex flex-col justify-center gap-y-5">
            <p className=" text-[20px] font-light italic">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className=" flex items-center gap-x-4">
              <Image
                src={avatar}
                alt="avatar"
                className=" w-[50px] h-[50px] rounded-full"
              />
              <div className=" flex flex-col">
                <p className=" text-[20px] text-[#3A8EF6]">Kaung Set</p>
                <p className=" text-[16px] text-[#6C87AE]">Product Designer</p>
              </div>
            </div>
          </div>
          <div className=" bg-white w-[455px] h-[258px] shadow-md rounded-3xl px-5 flex flex-col justify-center gap-y-5">
            <p className=" text-[20px] font-light italic">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className=" flex items-center gap-x-4">
              <Image
                src={avatar}
                alt="avatar"
                className=" w-[50px] h-[50px] rounded-full"
              />
              <div className=" flex flex-col">
                <p className=" text-[20px] text-[#3A8EF6]">Kaung Set</p>
                <p className=" text-[16px] text-[#6C87AE]">Product Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex gap-10 justify-center">
          <div className=" bg-white w-[455px] h-[258px] shadow-md rounded-3xl px-5 flex flex-col justify-center gap-y-5">
            <p className=" text-[20px] font-light italic">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className=" flex items-center gap-x-4">
              <Image
                src={avatar}
                alt="avatar"
                className=" w-[50px] h-[50px] rounded-full"
              />
              <div className=" flex flex-col">
                <p className=" text-[20px] text-[#3A8EF6]">Kaung Set</p>
                <p className=" text-[16px] text-[#6C87AE]">Product Designer</p>
              </div>
            </div>
          </div>
          <div className=" bg-white w-[455px] h-[258px] shadow-md rounded-3xl px-5 flex flex-col justify-center gap-y-5">
            <p className=" text-[20px] font-light italic">
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className=" flex items-center gap-x-4">
              <Image
                src={avatar}
                alt="avatar"
                className=" w-[50px] h-[50px] rounded-full"
              />
              <div className=" flex flex-col">
                <p className=" text-[20px] text-[#3A8EF6]">Kaung Set</p>
                <p className=" text-[16px] text-[#6C87AE]">Product Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
