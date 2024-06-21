import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import clinic from "../../assets/home/clinic.png";
import Image from "next/image";

const Clinic = () => {
  return (
    <div>
      <p className=" w-full text-center text-[45px] font-semibold text-primary mb-[96px]">
        Our Clinic
      </p>
      <div className=" flex items-center px-[120px] gap-x-[72px]">
        <div className=" flex flex-col gap-y-[52px]">
          <p className=" text-[32px] text-primary">
            Our Clinic Serves The Best For You
          </p>
          <div className=" w-[563px] h-[413px] bg-[#f0f7ef] border-l-[10px] border-primary p-[47px]">
            <div className=" h-full flex flex-col gap-y-10 items-center justify-center">
              <p className=" text-[21px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer .
              </p>
              <p className=" text-[21px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer .
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-x-4">
            <p className="text-[32px]">Learn more</p>
            <div className=" w-[30px] h-[30px] bg-[#E99992] rounded-full flex justify-center items-center text-white">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
        <div>
          <div className=" relative">
            <Image
              src={clinic}
              alt="clinic"
              className=" w-[510px] h-[587px] relative z-20"
            />
            <div className="w-[435px] h-[535px] bg-primary absolute top-[-28px] right-[-28px] z-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
