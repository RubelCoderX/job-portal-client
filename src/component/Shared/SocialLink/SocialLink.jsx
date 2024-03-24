import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLink = () => {
  return (
    <div className="w-[87%] mx-auto -mt-8">
      <div className="border p-2 flex items-center cursor-pointer hover:bg-blue-700 hover:text-white rounded-lg transition-all duration-300">
        <FaGoogle className="text-2xl"></FaGoogle>
        <div className="mx-auto">
          <p className="text-center">Continue with Google</p>
        </div>
      </div>
      <div className="border p-2 flex items-center cursor-pointer hover:bg-blue-700 hover:text-white rounded-lg mt-3 transition-all duration-300">
        <FaGithub className="text-2xl"></FaGithub>
        <div className="mx-auto">
          <p className="text-center">Continue with Github</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
