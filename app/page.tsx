import Banner from "@/components/Home/Banner";
import Clinic from "@/components/Home/Clinic";
import Offer from "@/components/Home/Offer";
import Products from "@/components/Home/Products";
import Review from "@/components/Home/Review";
import Treatment from "@/components/Home/Treatment";
import Video from "@/components/Home/Video";
import React from "react";

const Home = () => {
  return (
    <div>
      <Banner />
      <Treatment />
      <section className=" mt-52">
        <Clinic />
      </section>
      <section className=" mt-32">
        <Products />
      </section>
      <section className=" mt-32">
        <Offer />
      </section>
      <section className=" mt-32">
        <Video />
      </section>
      <section className=" my-32">
        <Review />
      </section>
    </div>
  );
};

export default Home;
