import React from "react";

const Popular = () => {
  return (
    <div
      style={{
        background: "var(--Gray-White, #FFF)",
        boxShadow: "0px -1px 0px 0px #E4E5E8 ",
        padding: "100px 300px",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl">Most Popular Vacancies</h2>
        <div className="grid lg:grid-cols-3 space-y-3 mt-10">
          <div>
            <h2 className="text-xl">Anesthesiologists</h2>
            <p className="text-gray-400 text-[14px]">45,904 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">Surgeons</h2>
            <p className="text-gray-400 text-[14px]">50,364 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">Obstetricians-Gynecologists</h2>
            <p className="text-gray-400 text-[14px]">4,339 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">Orthodontists</h2>
            <p className="text-gray-400 text-[14px]">20,079 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">Maxillofacial Surgeons</h2>
            <p className="text-gray-400 text-[14px]">74,875 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">Software Developer</h2>
            <p className="text-gray-400 text-[14px]">43359 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">Psychiatrists</h2>
            <p className="text-gray-400 text-[14px]">18,599 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">Data Scientist</h2>
            <p className="text-gray-400 text-[14px]">28,200 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">Financial Manager</h2>
            <p className="text-gray-400 text-[14px]">61,391 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">Management Analysis</h2>
            <p className="text-gray-400 text-[14px]">93,046 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">IT Manager</h2>
            <p className="text-gray-400 text-[14px]">50,963 Open Positions</p>
          </div>
          <div>
            <h2 className="text-xl">Operations Research Analysis</h2>
            <p className="text-gray-400 text-[14px]">16,627 Open Positions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
