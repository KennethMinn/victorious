"use client";

import Image from "next/image";
import React, { useState } from "react";
import founder from "../../assets/aboutus/founder.png";
import { BsDot } from "react-icons/bs";
import bg_pink from "../../assets/aboutus/bg.png";
import CardCarousel from "./CardCarousel";
import { IoIosArrowUp } from "react-icons/io";

const Founder = () => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  return (
    <div className="flex flex-col gap-y-[90px]">
      <div className="flex justify-evenly gap-x-8">
        <div>
          <p className="w-full text-[45px] font-semibold text-primary mb-[10px]">
            Founder
          </p>
          <div className="flex flex-col gap-y-3">
            <span>
              Victorious Clinic ကို ဆရာမ Dr. ဟေမာမိုးမြင့်ဝင်း က 2015 March လ မှ
              <br />
              စတင်တည်ထောင်ခဲ့ခြင်း ဖြစ်ပါသည်… Dr. ဟေမာမိုးမြင့်ဝင်း က
            </span>
            <div className="flex gap-x-2 items-center">
              <BsDot />
              <span>
                M.B., B.S ဘွဲ့ကို ဆေးတက္ကသိုလ် ၂ ကနေ ၂၀၀၉ ခုနှစ်မှာ <br />
                ရရှိခဲ့ပါတယ်
              </span>
            </div>
            <div className="flex gap-x-2 items-center">
              <BsDot />
              <span>
                မှာ ဆရာကြီး /ဆရာမကြီးတွေရဲ့ ထောက်ခံချက်နဲ့ အတူ Thai နိုင်ငံ{" "}
                <br />
                Bangkok မြို့ပေါ်ရှိ အစိုးရ အရေပြားအထူးကုဆေးရုံ (Institute Of
                <br />
                Dermatology - International)မှာ Full time -1နှစ် တက်ခဲ့ပြီး{" "}
                <br />
                အရေပြားအထူးကု ပညာရပ်များကိုသင်ကြားခဲ့ပါတယ်
              </span>
            </div>
          </div>
          <button
            onClick={() => setShowFirst(true)}
            className="border-primary border-[3px] rounded-md px-5 py-2 mt-5 font-semibold text-[20px]"
          >
            See more
          </button>
        </div>
        <div className="relative">
          <Image src={bg_pink} alt="bgpink" className="w-[350px]" />
          <Image
            src={founder}
            alt="founder"
            className="w-[290px] absolute top-[30px] left-[40px]"
          />
          <p className="text-[#714031] text-[32px] font-bold">
            Dr. Hay Mar Moe Myint Win
          </p>
        </div>
      </div>
      {showFirst && (
        <div>
          <div className="flex justify-between px-24">
            <p className="w-full text-[45px] font-semibold text-primary mb-[10px]">
              Founder
            </p>
            <div
              className=" cursor-pointer"
              onClick={() => setShowFirst(false)}
            >
              <IoIosArrowUp size={30} />
            </div>
          </div>
          <CardCarousel />
        </div>
      )}
      <div className="flex justify-evenly gap-x-8">
        <div className="relative">
          <Image src={bg_pink} alt="bgpink" className="w-[350px]" />
          <Image
            src={founder}
            alt="founder"
            className="w-[290px] absolute top-[30px] left-[40px]"
          />
          <p className="text-[#714031] text-[32px] font-bold">
            Dr. Hay Mar Moe Myint Win
          </p>
        </div>
        <div>
          <p className="w-full text-[45px] font-semibold text-primary mb-[10px]">
            Founder
          </p>
          <div className="flex flex-col gap-y-3">
            <span>
              Victorious Clinic ကို ဆရာမ Dr. ဟေမာမိုးမြင့်ဝင်း က 2015 March လ မှ
              <br />
              စတင်တည်ထောင်ခဲ့ခြင်း ဖြစ်ပါသည်… Dr. ဟေမာမိုးမြင့်ဝင်း က
            </span>
            <div className="flex gap-x-2 items-center">
              <BsDot />
              <span>
                M.B., B.S ဘွဲ့ကို ဆေးတက္ကသိုလ် ၂ ကနေ ၂၀၀၉ ခုနှစ်မှာ <br />
                ရရှိခဲ့ပါတယ်
              </span>
            </div>
            <div className="flex gap-x-2 items-center">
              <BsDot />
              <span>
                မှာ ဆရာကြီး /ဆရာမကြီးတွေရဲ့ ထောက်ခံချက်နဲ့ အတူ Thai နိုင်ငံ{" "}
                <br />
                Bangkok မြို့ပေါ်ရှိ အစိုးရ အရေပြားအထူးကုဆေးရုံ (Institute Of
                <br />
                Dermatology - International)မှာ Full time -1နှစ် တက်ခဲ့ပြီး{" "}
                <br />
                အရေပြားအထူးကု ပညာရပ်များကိုသင်ကြားခဲ့ပါတယ်
              </span>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="border-primary border-[3px] rounded-md px-5 py-2 mt-5 font-semibold text-[20px]"
              onClick={() => setShowSecond(true)}
            >
              See more
            </button>
          </div>
        </div>
      </div>
      {showSecond && (
        <div>
          <div className="flex justify-between px-24">
            <p className="w-full text-[45px] font-semibold text-primary mb-[10px]">
              Founder
            </p>
            <div
              className=" cursor-pointer"
              onClick={() => setShowSecond(false)}
            >
              <IoIosArrowUp size={30} />
            </div>
          </div>
          <CardCarousel />
        </div>
      )}
      <div className="flex justify-evenly gap-x-8">
        <div>
          <p className="w-full text-[45px] font-semibold text-primary mb-[10px]">
            Founder
          </p>
          <div className="flex flex-col gap-y-3">
            <span>
              Victorious Clinic ကို ဆရာမ Dr. ဟေမာမိုးမြင့်ဝင်း က 2015 March လ မှ
              <br />
              စတင်တည်ထောင်ခဲ့ခြင်း ဖြစ်ပါသည်… Dr. ဟေမာမိုးမြင့်ဝင်း က
            </span>
            <div className="flex gap-x-2 items-center">
              <BsDot />
              <span>
                M.B., B.S ဘွဲ့ကို ဆေးတက္ကသိုလ် ၂ ကနေ ၂၀၀၉ ခုနှစ်မှာ <br />
                ရရှိခဲ့ပါတယ်
              </span>
            </div>
            <div className="flex gap-x-2 items-center">
              <BsDot />
              <span>
                မှာ ဆရာကြီး /ဆရာမကြီးတွေရဲ့ ထောက်ခံချက်နဲ့ အတူ Thai နိုင်ငံ{" "}
                <br />
                Bangkok မြို့ပေါ်ရှိ အစိုးရ အရေပြားအထူးကုဆေးရုံ (Institute Of
                <br />
                Dermatology - International)မှာ Full time -1နှစ် တက်ခဲ့ပြီး{" "}
                <br />
                အရေပြားအထူးကု ပညာရပ်များကိုသင်ကြားခဲ့ပါတယ်
              </span>
            </div>
          </div>
          <button
            className="border-primary border-[3px] rounded-md px-5 py-2 mt-5 font-semibold text-[20px]"
            onClick={() => setShowThird(true)}
          >
            See more
          </button>
        </div>
        <div className="relative">
          <Image src={bg_pink} alt="bgpink" className="w-[350px]" />
          <Image
            src={founder}
            alt="founder"
            className="w-[290px] absolute top-[30px] left-[40px]"
          />
          <p className="text-[#714031] text-[32px] font-bold">
            Dr. Hay Mar Moe Myint Win
          </p>
        </div>
      </div>
      {showThird && (
        <div>
          <div className="flex justify-between px-24">
            <p className="w-full text-[45px] font-semibold text-primary mb-[10px]">
              Founder
            </p>
            <div
              className=" cursor-pointer"
              onClick={() => setShowThird(false)}
            >
              <IoIosArrowUp size={30} />
            </div>
          </div>
          <CardCarousel />
        </div>
      )}
    </div>
  );
};

export default Founder;
