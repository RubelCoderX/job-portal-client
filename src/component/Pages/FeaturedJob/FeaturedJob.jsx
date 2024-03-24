import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import FeaturedJobCard from "./FeaturedJobCard";

const FeaturedJob = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div
      style={{
        background: "var(--Gray-Scale-White, #FFF)",
        // boxShadow: " 0px -1px 0px 0px #E4E5E8",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between mt-24 ">
          <h2 className="text-4xl">Featured Job</h2>
          <button className="py-1 px-6 border flex justify-center items-center text-blue-500 border-blue-600 ">
            View All
            <FaArrowRight className="ml-2"></FaArrowRight>
          </button>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 mt-20 mb-20">
          {jobs.map((jobs) => (
            <FeaturedJobCard
              jobs={jobs}
              key={jobs.job_position_name}
            ></FeaturedJobCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedJob;
