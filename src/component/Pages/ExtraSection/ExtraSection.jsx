import React from "react";
import "./ExtraSection.css";
import image from "../../../assets/logo/image.avif";
import man from "../../../assets/logo/man.jpg";
import { FaArrowRight } from "react-icons/fa";

const ExtraSection = () => {
  return (
    <div>
      <div
        style={{ padding: "100px" }}
        className="max-w-screen-xl mx-auto grid grid-cols-2 gap-6"
      >
        <div>
          <div className="banner_img bg-fixed w-[500px]  absolute h-40">
            <img className=" rounded-lg" src={image} alt="" />
            <div className="relative space-y-3 -mt-60 p-4">
              <h2 className="text-2xl">Become A Candidate</h2>
              <p className="text-gray-600 h-20">
                Ready to take the next step in your career journey? Lets connect
                you with your dream job!
              </p>
              <button className="flex items-center py-2 px-4 bg-white  text-blue-600 rounded-md">
                Register Now <FaArrowRight className="ml-3"></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
        <div className="banner_img_two w-[500px] bg-blue-800 opacity-90   h-[280px] rounded-lg">
          <div className=" space-y-3 pt-14 p-4">
            <h2 className="text-2xl text-white">Become A Employer</h2>
            <p className="text-white h-20">
              Feel free to personalize this description with specific details
              about your company culture, mission, and perks to attract
              potential employees.
            </p>
            <button className="flex items-center py-2 px-4 mt-5 bg-white  text-blue-600 rounded-md">
              Register Now <FaArrowRight className="ml-3"></FaArrowRight>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
