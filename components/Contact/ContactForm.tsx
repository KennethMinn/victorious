"use client";
import React from "react";

const ContactForm = () => {
  return (
    <div className=" flex items-center justify-center gap-x-8 px-[103px]">
      <div className="flex flex-col gap-y-3">
        <h1 className=" text-[48px] font-semibold linear">Get In Touch</h1>
        <input
          type="text"
          placeholder="Name"
          className=" h-[87px] w-[600px] border-2 rounded-[8px] bg-transparent border-[#763667] ps-5"
        />
        <input
          type="text"
          placeholder="Email"
          className=" h-[87px] w-[600px] border-2 rounded-[8px] bg-transparent border-[#763667] ps-5"
        />
        <input
          type="text"
          placeholder="Phone"
          className=" h-[87px] w-[600px] border-2 rounded-[8px] bg-transparent border-[#763667] ps-5"
        />
        <select className=" h-[87px] w-[600px] border-2 rounded-[8px] bg-transparent border-[#763667] ps-5">
          <option value="" disabled selected>
            Select treatment
          </option>
          <option value="face_treatment">Face treatment</option>
          <option value="body_treatment">Body treatment</option>
        </select>
        <button className=" w-[184px] h-[55px] bg-primary text-white rounded-md">
          Submit
        </button>
      </div>
      <div className=" w-full">
        <iframe
          className=" w-full h-[600px] border-none outline-none"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.476013367986!2d96.14529577461576!3d16.852331217999595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19500030f9f75%3A0x56c35179085364b2!2sVictorious%20Skin%20%26%20Aesthetic%20Clinic!5e0!3m2!1sen!2smm!4v1719913921279!5m2!1sen!2smm"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
