import React from "react";
import Banner from "../../components/About/Banner";
import Founder from "@/components/About/Founder";
import Vision from "@/components/About/Vision";

const About = () => {
  return (
    <div>
      <Banner />
      <section className=" my-10">
        <Founder />
      </section>
      <section className=" mt-20 mb-56">
        <Vision />
      </section>
    </div>
  );
};

export default About;
