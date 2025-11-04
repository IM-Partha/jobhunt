import { setsingleCompany } from "@/redux/companySlice";
import { JobcraereApi } from "@/urls/Apiurl";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetCompanyByid = (compnayId) => {
  const dispacth = useDispatch();
  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(`${JobcraereApi}/get/${compnayId}`, { withCredentials: true });
        
        if (res.data.success) {
          dispacth(setsingleCompany(res.data.company));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleCompany();
  }, [compnayId, dispacth]);
};

export default useGetCompanyByid;
