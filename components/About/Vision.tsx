import Image from "next/image";
import React from "react";
import people from "../../assets/aboutus/people.png";

const Vision = () => {
  return (
    <div className=" relative">
      <Image src={people} alt="img" />
      <div className=" absolute  w-full top-[150px] px-[160px] opacity-85">
        <div className=" bg-[#FFFBE5] px-10 pt-10 pb-36 rounded-md flex flex-col gap-y-[40px]">
          <p className=" w-full text-center text-[45px] font-semibold text-primary">
            Vision & Mission
          </p>
          <div className=" flex gap-x-10 text-[20px]">
            <h1>Mission</h1>
            <p>
              At Victorious Clinic, our mission is to provide exceptional,
              patient-centered healthcare through compassionate service,
              innovative treatments, and unwavering dedication to the well-being
              of our community. We strive to empower individuals on their
              journey to optimal health and wellness by delivering personalized
              care and fostering a supportive, healing environment.
            </p>
          </div>
          <div className=" flex gap-x-10 text-[20px]">
            <h1>Mission</h1>
            <p>
              At Victorious Clinic, our mission is to provide exceptional,
              patient-centered healthcare through compassionate service,
              innovative treatments, and unwavering dedication to the well-being
              of our community. We strive to empower individuals on their
              journey to optimal health and wellness by delivering personalized
              care and fostering a supportive, healing environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
