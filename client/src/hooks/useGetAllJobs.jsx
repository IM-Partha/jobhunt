import { setAlljobs } from "@/redux/jobSlice";
import { ApiJob } from "@/urls/Apiurl";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllJobs = () => {
  const dispacth = useDispatch();
  const {searchquery}=useSelector(store=>store.job)
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${ApiJob}/get?keyword=${searchquery}`, { withCredentials: true });
        if (res.data.success) {
          dispacth(setAlljobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs()
  },[]);
};

export default useGetAllJobs;
