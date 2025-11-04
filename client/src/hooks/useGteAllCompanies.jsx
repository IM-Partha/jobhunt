import { setCompanies } from '@/redux/companySlice';
import { JobcraereApi } from '@/urls/Apiurl';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGteAllCompanies = () => {
  const dispacth = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${JobcraereApi}/get`, { withCredentials: true });
        
        if (res.data.success) {
          dispacth(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompanies();
  }, [dispacth]);
}

export default useGteAllCompanies