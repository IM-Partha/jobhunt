import React, { useEffect } from "react";
import { Badge } from "./badge";
import { Button } from "./button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ApiJob } from "@/urls/Apiurl";
import { setSinglejob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";

const Descriptiopage = () => {
  const isApplied = true;
  const dispacth = useDispatch();
  const {user} = useSelector(store=>store.auth);
  const params = useParams();
  const jobId = params.id;
  const {singlejob} =useSelector(store=>store.job)

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${ApiJob}/get/${jobId}`, {
          withCredentials: true,
        });
        console.log(res)
        if (res.data.success) {
          dispacth(setSinglejob(res.data.job));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  }, [jobId,dispacth, user?._id]);
  return (
    <div className="max-w-7xl px-10 my-10">
      <h1 className="text-bold text-xl ">{singlejob?.title}</h1>
      <div className="flex justify-between">
        <div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge className="text-blue-700 font-semibold" variant="ghost">
              {singlejob?.position}
            </Badge>
            <Badge className="text-[#F83002] font-semibold" variant="ghost">
              {singlejob?.jobType}
            </Badge>
            <Badge className="text-[#7209b7] font-semibold" variant="ghost">
              {singlejob?.salary}
            </Badge>
          </div>
        </div>
        <Button
          disabled={isApplied}
          className={`rounded-lg ${
            isApplied
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-[#7209b7] hover:bg-[#5f32ad]"
          } `}
        >
          {isApplied ? "Already Apply" : "Appy Now"}
        </Button>
      </div>
      <div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
          {singlejob?.description}
        </h1>
      </div>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role: <span className="pl-4 font-normal text-gray-800">{singlejob?.title}</span>
        </h1>
        <h1 className="font-bold my-1">
          Location: <span className="pl-4 font-normal text-gray-800">{singlejob?.location}</span>
        </h1>
        <h1 className="font-bold my-1">
          Description: <span className="pl-4 font-normal text-gray-800">{singlejob?.description}</span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">{singlejob?.experienceLevel} yrs</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary: <span className="pl-4 font-normal text-gray-800">{singlejob?.salary}LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800"> {singlejob?.applications.length}</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date: <span className="pl-4 font-normal text-gray-800">{singlejob?.createdAt.split("T")[0]}</span>
        </h1>
      </div>
    </div>
  );
};

export default Descriptiopage;
