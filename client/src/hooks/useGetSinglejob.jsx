import { setAlljobs, setSingleJob } from "@/redux/jobSlice";
import { ApiJob } from "@/urls/Apiurl";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";


const useGetSinglejob = (jobId) => {
  

  const dispacth = useDispatch();

};


export default useGetSinglejob;