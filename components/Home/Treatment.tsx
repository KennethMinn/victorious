import React from "react";
import treatment_pic1 from "../../assets/home/treatment_pic1.png";
import treatment_pic2 from "../../assets/home/treatment_pic2.png";
import treatment_pic3 from "../../assets/home/treatment_pic3.png";
import treatment_pic4 from "../../assets/home/treatment_pic4.png";
import treatment_pic5 from "../../assets/home/treatment_pic5.png";
import Image from "next/image";

const treatments = [
  {
    id: 1,
    image: treatment_pic1,
    label: "Lips Treatment",
  },
  {
    id: 1,
    image: treatment_pic2,
    label: "Filter",
  },
  {
    id: 1,
    image: treatment_pic3,
    label: "Body Treatment",
  },
  {
    id: 1,
    image: treatment_pic4,
    label: "Face Treatment",
  },
  {
    id: 1,
    image: treatment_pic5,
    label: "Face Treatment",
  },
];

const Treatment = () => {
  return (
    <div className=" h-[253px] bg-primary">
      <div className=" w-full text-center text-[45px] font-semibold text-white pt-[30px]">
        Treatments
      </div>
      <div className=" flex items-center gap justify-center gap-x-[30px] mt-7">
        {treatments.map((treatment) => (
          <div
            key={treatment.id}
            className=" flex flex-col gap-y-[21px] items-center hover:scale-110 transition duration-[0.1s]"
          >
            <Image
              src={treatment.image}
              alt="treatment_pic1"
              className=" w-[200px] h-[200px]"
            />
            <p className=" text-common font-semibold text-[24px]">
              {treatment.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatment;
