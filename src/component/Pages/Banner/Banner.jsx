import React from "react";
import BannerImg from "../../../assets/Banner1.png";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import logo from "../../../assets/briefcase 1.png";
import { FaPeoplePulling } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Banner = () => {
  return (
    <div style={{ background: "rgba(241, 242, 244, 0.60)" }} className="pb-20">
      <div className="max-w-screen-xl mx-auto">
        <div className="mt-20  container grid lg:grid-cols-2 sm:grid-cols-1 mx-auto">
          <div className="flex-1 lg:my-auto">
            <h2 className="text-4xl w-2/3">
              Find a job that suits your interest & skills.
            </h2>
            <p className="mt-6 w-3/4 text-gray-400">
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit bestibulum.
            </p>
            <div>
              <div
                style={{
                  borderRadius: "5px",
                  background: "var(--Gray-Scale-White, #FFF)",
                }}
                className="flex items-center  py-2 border mt-6"
              >
                <div className="flex items-center border-r-2">
                  <p className="ml-2">
                    <CiSearch className="text-xl"></CiSearch>
                  </p>
                  <input
                    className="outline-none border-none mr-2 w-[220px]"
                    type="text"
                    name=""
                    id=""
                    placeholder="Job tittle, Keyword..."
                  />
                </div>

                <div className="flex items-center">
                  <p className="ml-2">
                    <CiLocationOn className="text-xl"></CiLocationOn>
                  </p>
                  <input
                    className="outline-none border-none w-[220px]"
                    type="text"
                    name=""
                    id=""
                    placeholder="Your Location"
                  />
                </div>
                <div className="ml-2">
                  <button className="py-2 text-white rounded px-6 bg-blue-700 ">
                    Find Job
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 lg:ml-20 my-auto mb-40">
            <img className="w-[492px] h-[492px" src={BannerImg} alt="" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4">
          <div className="w-60 flex items-center my-auto h-20 bg-white rounded-md">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-16 ml-6 flex items-center justify-center h-12 rounded"
            >
              <img className=" " src={logo} alt="" />
            </div>
            <div className="ml-4">
              <h4 className="block">4000</h4>
              <p className="text-gray-400">Live Jobs</p>
            </div>
          </div>
          <div className="w-60 flex items-center my-auto h-20 bg-white rounded-md">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-16 ml-6 flex items-center justify-center h-12 rounded"
            >
              <p>
                <HiOutlineBuildingOffice2 className="text-4xl text-blue-600"></HiOutlineBuildingOffice2>
              </p>
            </div>
            <div className="ml-4">
              <h4 className="block">4600</h4>
              <p className="text-gray-400">Companies</p>
            </div>
          </div>
          <div className="w-60 flex items-center my-auto h-20 bg-white rounded-md">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-16 ml-6 flex items-center justify-center h-12 rounded"
            >
              <p>
                <FaPeoplePulling className="text-4xl text-blue-600"></FaPeoplePulling>
              </p>
            </div>
            <div className="ml-4">
              <h4 className="block">3400</h4>
              <p className="text-gray-400">Candidates</p>
            </div>
          </div>
          <div className="w-60 flex items-center my-auto h-20 bg-white rounded-md">
            <div
              style={{ background: "var(--Primary-50, #E7F0FA)" }}
              className="w-16 ml-6 flex items-center justify-center h-12 rounded"
            >
              <img className=" " src={logo} alt="" />
            </div>
            <div className="ml-4">
              <h4 className="block">400</h4>
              <p className="text-gray-400">New Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
