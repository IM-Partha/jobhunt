import React from "react";
import FilterCard from "./Fitercard";
import { useSelector } from "react-redux";
import Job from "./Job";

const Jobs = () => {
  const { alljobs } = useSelector((store) => store.job);

  return (
    <section className="max-w-7xl mx-auto px-5 mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar (Filters) */}
        <aside className="lg:w-1/4 w-full">
          <FilterCard />
        </aside>

        {/* Jobs List */}
        <main className="flex-1">
          {alljobs.length <= 0 ? (
            <div className="text-center text-gray-500 py-16 text-lg font-medium">
              No jobs found
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 overflow-y-auto max-h-[80vh] pr-2 pb-5">
              {alljobs.map((job) => (
                <Job job={job} key={job?._id} />
              ))}
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Jobs;
