import Image from "next/image";
import React from "react";
import bunny from "../assets/footer/bunny vector.png";
import location from "../assets/footer/location_on.png";
import phone from "../assets/footer/Vector (4).png";
import ig from "../assets/footer/_Instagram.png";
import fb from "../assets/footer/Vector (1).png";
import twitter from "../assets/footer/Vector (2).png";
import tiktok from "../assets/footer/Vector (3).png";

const footers = [
  {
    label: "No Tests On Animals",
    icon: bunny,
  },
  {
    label: "No animal-derived ingredients",
    icon: bunny,
  },
  {
    label: "No gluten, or gluten byproducts",
    icon: bunny,
  },
  {
    label: "Recyclable packaging",
    icon: bunny,
  },
];

const Footer = () => {
  return (
    <div>
      <div className="bg-[#fbeff2] text-[#79043C] h-[104px] flex justify-center items-center gap-x-20">
        {footers.map((footer, i) => (
          <div key={i} className=" flex gap-x-4 items-center">
            <Image
              src={footer.icon}
              alt="bunny"
              className=" w-[35px] h-[35px]"
            />
            <p className=" text-[16px]">{footer.label}</p>
          </div>
        ))}
      </div>
      <div className=" flex gap-x-[130px] bg-[#f891a3] py-12 justify-center text-white">
        <div className=" flex flex-col gap-y-3">
          <p className=" text-[24px] font-bold ">How Can We Help?</p>
          <div className=" text-[16px] flex flex-col gap-y-3">
            <p>Home</p>
            <p>About Us</p>
            <p>Service</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3">
            <p className=" text-[24px] font-bold ">Products</p>
            <div className=" text-[16px] flex flex-col gap-y-3">
              <p>Derm dress</p>
              <p>Women Skincare</p>
              <p>Gifts & Sets</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className=" text-[24px] font-bold ">opening Hours</p>
            <div className=" text-[16px] flex flex-col gap-y-3">
              <p>Mon-Sat: 9AM - 7PM</p>
              <p>
                Sunday: <span className=" font-bold text-[20px]">Closed</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3">
            <p className=" text-[24px] font-bold ">
              keep in touch with Victorious
              <span className="text-[16px]">skin & Aesthetic Clinic</span>
            </p>
            <div className=" text-[16px] flex flex-col gap-y-4">
              <p className="">
                အမှတ် ၆၇၇၊ မြေညီထပ်၊ မေတ္တာလမ်း၊ ၉ရပ်ကွက်(City Mart အနီး)
                တောင်ဥက္ကလာပမြို့နယ် <br /> Yangon, Myanmar, 1109, South
                Okkalapa, Yangon
              </p>
              <div className=" flex items-center gap-x-2 mt-3">
                <input
                  id="email"
                  type="text"
                  className=" border-b-2 border-[#CBCBCB] bg-transparent outline-none w-[400px] h-[56px]"
                  placeholder="Email Address"
                />
                <button className=" h-[56px] border text-[#CBCBCB] border-[#CBCBCB] px-4 cursor-pointer">
                  Subscribe
                </button>
              </div>
              <div className=" flex gap-x-2 mt-2">
                <input type="checkbox" className=" bg-transparent w-4 h-4" />
                <div className=" text-[14px]">
                  By submitting your email, you agree to receive advertising
                  emails from Beautya. <br /> Please review our Privacy Policy,
                  which includes our Financial Incentive Notice for CA <br />
                  residents.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-primary h-[69px] flex items-center justify-around text-white">
        <div className="flex gap-x-6">
          <div className=" flex gap-x-4 items-center">
            <Image
              src={location}
              alt="location"
              className=" w-[35px] h-[35px]"
            />
            <p className=" text-[16px]">Victorious, Yangon</p>
          </div>
          <div className=" flex gap-x-4 items-center">
            <Image src={phone} alt="phone" className=" w-[25px] h-[25px]" />
            <p className=" text-[16px]">09750145883, 09969121111</p>
          </div>
        </div>
        <div className=" flex items-center gap-x-4">
          <Image src={ig} alt="ig" className=" w-[25px] h-[25px]" />
          <Image src={fb} alt="fb" className=" w-[25px] h-[25px]" />
          <Image src={twitter} alt="twitter" className=" w-[25px] h-[25px]" />
          <Image src={tiktok} alt="tiktok" className=" w-[25px] h-[25px]" />
        </div>
      </div>
      <div className="text-[12px] bg-[#3F1F38] h-[60px] flex items-center justify-around text-white">
        <div className="flex gap-x-6">c 2023 Beautya. All Rights Reserved.</div>
        <div className=" flex items-center gap-x-4 ">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
