import { setAllAdminJobs } from "@/redux/jobSlice";
import { ApiJob } from "@/urls/Apiurl";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllAdminJobs = () => {
  const dispacth = useDispatch();
  useEffect(() => {
    const fetchAdminAllJobs = async () => {
      try {
        const res = await axios.get(`${ApiJob}/getadminjobs`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispacth(setAllAdminJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdminAllJobs();
  }, []);
};

export default useGetAllAdminJobs;
