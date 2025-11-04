import React, { useEffect } from 'react';
import Hearosection from './Hearosection';
import Categorycarousel from './Categorycarousel';
import Latestjobs from './Latestjobs';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.role === 'recruiter') {
      navigate('/admin/companies');
    }
  }, [user, navigate]);

  useGetAllJobs();

  return (
    <div>
      <Hearosection />
      <Categorycarousel />
      <Latestjobs />
    </div>
  );
};

export default Home;
