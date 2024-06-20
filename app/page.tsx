import Banner from "@/components/Home/Banner";
import Clinic from "@/components/Home/Clinic";
import Treatment from "@/components/Home/Treatment";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <Treatment />
      <section className=" mt-52">
        <Clinic />
      </section>
    </div>
  );
};

export default Home;
