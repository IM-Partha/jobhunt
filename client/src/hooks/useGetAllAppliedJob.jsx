import { setAllAppliedJobs } from "@/redux/jobSlice";
import { Apiapplication } from "@/urls/Apiurl";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await axios.get(`${Apiapplication}/get`, {
          withCredentials: true,
        });

        if (res.data.success) {
      
          dispatch(setAllAppliedJobs(res.data.applications));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppliedJobs();
  }, []);
};
export default useGetAppliedJobs;
