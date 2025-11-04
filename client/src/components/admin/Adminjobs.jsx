import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Adminjobstable from "./Adminjobstable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { setsearchJobByText } from "@/redux/jobSlice";

const Adminjobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setsearchJobByText(filter));
  }, [filter, dispatch]);

  return (
    <div className="max-w-6xl mx-auto my-10 h-screen">
      {/* Header controls */}
      <div className="flex items-center justify-between my-5">
        <Input
          className="w-1/3"
          placeholder="Filter by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Button onClick={() => navigate("/admin/job/create")}>
          New Job
        </Button>
      </div>

      {/* Table */}
      <Adminjobstable />
    </div>
  );
};

export default Adminjobs;
