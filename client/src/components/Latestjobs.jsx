import React from "react";
import Latestjobcarts from "./Latestjobcarts";
import { useSelector } from "react-redux";

const Latestjobs = () => {
  const { alljobs } = useSelector((store) => store.job);
  return (
    <section className="max-w-7xl mx-auto my-20 px-4 mt-15">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {alljobs.length === 0 ? (
          <span>No Job Available</span>
        ) : (
          alljobs.slice(0, 6).map((item) => (
            <Latestjobcarts key={item._id} item={item} />
          ))
        )}
      </div>
    </section>
  );
};

export default Latestjobs;
