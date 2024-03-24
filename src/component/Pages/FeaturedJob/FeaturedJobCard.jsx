import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const FeaturedJobCard = ({ jobs }) => {
  const {
    job_position_name,
    employment_type,
    salary_range,
    company_name,
    company_logo,
    location,
  } = jobs;
  return (
    <div>
      <div
        className="w-96 h-40 cursor-pointer"
        style={{
          borderRadius: "8px",
          border: "1px solid var(--Gray-100, #E4E5E8)",
          background: "linear-gradient(90deg, #FFF6E6 0%, #FFF 100%), #FFF",

          boxShadow: "0px 2px 18px 0px rgba(24, 25, 28, 0.03)",
        }}
      >
        <div className="p-4 space-y-2">
          <h2 className="text-xl">{job_position_name}</h2>
          <div className="flex items-center">
            <p
              style={{ background: "var(--Success-50, #E7F6EA)" }}
              className="p-2 rounded-md text-[#22c55e]"
            >
              {employment_type}
            </p>
            <p className="ml-4 text-gray-400">Salary: {salary_range}</p>
          </div>
          <div className="flex items-center">
            <img
              className="w-12 h-12 mr-4 rounded-full"
              src={company_logo}
              alt=""
            />
            <div className="flex justify-between items-center">
              <div>
                <h4>{company_name}</h4>
                <p className="flex items-center text-gray-400">
                  <IoLocationOutline className="text-xl"></IoLocationOutline>
                  {location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobCard;
