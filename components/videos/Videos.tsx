import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import clear_skin from "../../assets/videos/clear-skin.png";
import Image from "next/image";
import { subStr } from "@/utils/sub-str";
import play from "../../assets/videos/play_circle_outline.png";

const Videos = () => {
  const videos = [
    {
      title: "How to get clear skin fast",
      subTitle: "Skincare | Dr.Wade Warren | Jan 20, 2021",
      description:
        "Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. In general, people struggling with acne or blemishes have skin that is dry, oily, or a combination of the two.",
      image: clear_skin,
    },
    {
      title: "How to get clear skin fast",
      subTitle: "Skincare | Dr.Wade Warren | Jan 20, 2021",
      description:
        "Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. In general, people struggling with acne or blemishes have skin that is dry, oily, or a combination of the two.",
      image: clear_skin,
    },
    {
      title: "How to get clear skin fast",
      subTitle: "Skincare | Dr.Wade Warren | Jan 20, 2021",
      description:
        "Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. In general, people struggling with acne or blemishes have skin that is dry, oily, or a combination of the two.",
      image: clear_skin,
    },
    {
      title: "How to get clear skin fast",
      subTitle: "Skincare | Dr.Wade Warren | Jan 20, 2021",
      description:
        "Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. In general, people struggling with acne or blemishes have skin that is dry, oily, or a combination of the two.",
      image: clear_skin,
    },
    {
      title: "How to get clear skin fast",
      subTitle: "Skincare | Dr.Wade Warren | Jan 20, 2021",
      description:
        "Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. In general, people struggling with acne or blemishes have skin that is dry, oily, or a combination of the two.",
      image: clear_skin,
    },
    {
      title: "How to get clear skin fast",
      subTitle: "Skincare | Dr.Wade Warren | Jan 20, 2021",
      description:
        "Many people find it difficult to get clear skin. The methods for getting clear skin will vary, depending on the person’s skin type. In general, people struggling with acne or blemishes have skin that is dry, oily, or a combination of the two.",
      image: clear_skin,
    },
  ];

  return (
    <div className="px-[108px]">
      <div className=" flex gap-x-0 items-center ">
        <p>Home</p>
        <MdOutlineKeyboardArrowRight size={20} />
        <p className=" font-bold">Videos</p>
      </div>
      <p className=" text-primary text-[40px] font-bold">
        Victorious&apos;s Videos
      </p>
      <div className=" grid grid-cols-3 gap-[24px] justify-items-center ">
        {videos.map((video, i) => (
          <div key={i} className="w-[400px] relative">
            <Image
              src={video.image}
              alt="photo"
              className=" w-[394px] h-[294px] object-cover z-10 cursor-pointer"
            />
            <Image
              src={play}
              alt="play"
              className=" absolute z-20 top-[90px] left-[150px] cursor-pointer"
            />
            <div className=" flex flex-col gap-y-0 pt-4 px-3 bg-white border-b-[7px] border-[#6e5062] rounded-b-[30px]">
              <p className=" font-bold text-[20px]">{video.title}</p>
              <p className=" text-[12px] text-[#606060]">{video.subTitle}</p>
              <p className=" text-[16px] mt-2 h-[80px]">
                {subStr(video.description)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
