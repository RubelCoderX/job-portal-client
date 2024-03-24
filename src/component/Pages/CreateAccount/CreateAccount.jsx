import React from "react";
import { PiUserPlusDuotone } from "react-icons/pi";
import { PiCloudArrowUpBold } from "react-icons/pi";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
import { PiSealCheckDuotone } from "react-icons/pi";

const CreateAccount = () => {
  return (
    <div
      className=""
      style={{
        background: "var(--Gray-50, #F1F2F4)",
        padding: "100px 300px",
      }}
    >
      <h2 className="text-4xl text-center mb-20">How job pilot work</h2>
      <div className="grid lg:grid-cols-4 gap-5">
        <div className="w-80 h-48 space-y-2 text-center  py-4 rounded-md">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
            <PiUserPlusDuotone className="text-3xl text-blue-600" />
          </div>
          <h2>Create account</h2>
          <p className="text-gray-400">
            Aliquam facilisis egestas sapien, nec tempor leo tristique at.
          </p>
        </div>

        <div className="w-80 h-48 space-y-2 text-center  py-4 bg-white rounded-md">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
            <PiCloudArrowUpBold className="text-3xl  text-white" />
          </div>
          <h2>Upload CV/Resume</h2>
          <p className="text-gray-400">
            Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales
          </p>
        </div>
        <div className="w-80 h-48 space-y-2 text-center  py-4 rounded-md">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
            <HiMagnifyingGlassPlus className="text-3xl text-blue-600 " />
          </div>
          <h2>Find suitable job</h2>
          <p className="text-gray-400">
            Phasellus quis eleifend ex. Morbi nec fringilla nibh.
          </p>
        </div>
        <div className="w-80 h-48 space-y-2 text-center  py-4 rounded-md">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
            <PiSealCheckDuotone className="text-3xl text-blue-600" />
          </div>
          <h2>Apply job</h2>
          <p className="text-gray-400">
            Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales
            purus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
