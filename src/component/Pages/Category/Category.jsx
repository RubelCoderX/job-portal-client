import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { LuPenTool } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { HiOutlineMegaphone } from "react-icons/hi2";
import { LuMonitorPlay } from "react-icons/lu";
import { CiMusicNote1 } from "react-icons/ci";
import { BsBuildings } from "react-icons/bs";
import { FaFirstAid } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const Category = () => {
  return (
    <div
      style={{
        background: "var(--Gray-White, #FFF)",
      }}
    >
      <div className="cursor-pointer max-w-screen-xl mx-auto">
        <div className="flex justify-between mt-24 ">
          <h2 className="text-4xl">Popular category</h2>
          <button className="py-1 px-6 border flex justify-center items-center text-blue-500 border-blue-600 ">
            View All
            <FaArrowRight className="ml-2"></FaArrowRight>
          </button>
        </div>
        <div className="mt-10 grid lg:grid-cols-4 gap-5">
          <div className="flex items-center p-6">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-12 h-12 flex justify-center items-center rounded-md"
            >
              <p>
                <LuPenTool className="text-3xl text-blue-600"></LuPenTool>
              </p>
            </div>
            <div className="ml-4">
              <h2 className="text-[15px]">Graphics & Design</h2>
              <p className="text-[12px] text-gray-400">357 Open position</p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-12 h-12 flex justify-center items-center rounded-md"
            >
              <p>
                <FaCode className="text-3xl text-blue-600"></FaCode>
              </p>
            </div>
            <div className="ml-4">
              <h2 className="text-[15px]">Code & Programming</h2>
              <p className="text-[12px] text-gray-400">312 Open position</p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-12 h-12 flex justify-center items-center rounded-md"
            >
              <p>
                <HiOutlineMegaphone className="text-3xl text-blue-600"></HiOutlineMegaphone>
              </p>
            </div>
            <div className="ml-4">
              <h2 className="text-[15px]">Digital Marketing</h2>
              <p className="text-[12px] text-gray-400">297 Open position</p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-12 h-12 flex justify-center items-center rounded-md"
            >
              <p>
                <LuMonitorPlay className="text-3xl text-blue-600"></LuMonitorPlay>
              </p>
            </div>
            <div className="ml-4">
              <h2 className="text-[15px]">Video & Animation</h2>
              <p className="text-[12px] text-gray-400">247 Open position</p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-12 h-12 flex justify-center items-center rounded-md"
            >
              <p>
                <CiMusicNote1 className="text-3xl text-blue-600"></CiMusicNote1>
              </p>
            </div>
            <div className="ml-4">
              <h2 className="text-[15px]">Music & Audio</h2>
              <p className="text-[12px] text-gray-400">204 Open position</p>
            </div>
          </div>
          <div className="flex items-center p-6 ">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-12 h-12 flex justify-center items-center rounded-md"
            >
              <p>
                <BsBuildings className="text-3xl text-blue-600"></BsBuildings>
              </p>
            </div>
            <div className="ml-4">
              <h2 className="text-[15px]">Account & Finance</h2>
              <p className="text-[12px] text-gray-400">167 Open position</p>
            </div>
          </div>
          <div className="flex items-center p-6">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-12 h-12 flex justify-center items-center rounded-md"
            >
              <p>
                <FaFirstAid className="text-3xl text-blue-600"></FaFirstAid>
              </p>
            </div>
            <div className="ml-4">
              <h2 className="text-[15px]">Health & Care</h2>
              <p className="text-[12px] text-gray-400">125 Open position</p>
            </div>
          </div>
          <div className="flex bg-white items-center p-6">
            <div className="w-12 h-12 bg-blue-600 flex justify-center items-center rounded-md">
              <p>
                <FaDatabase className="text-3xl text-white"></FaDatabase>
              </p>
            </div>
            <div className="ml-4">
              <h2 className="text-[15px]">Data & Science</h2>
              <p className="text-[12px] text-gray-400">57 Open position</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-20" />
    </div>
  );
};

export default Category;
