import React, { useEffect } from 'react'
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import { setsearchquery } from '@/redux/jobSlice';

const randomjobs = [1,2,3];
const Browser = () => {
  const dispatch = useDispatch()
  const {alljobs}=useSelector(store=>store.job)
  useEffect(()=>{
    return()=>{
      dispatch(setsearchquery(""))
    }
  },[])
  
  return (
    <div className='max-w-7xl mx-auto h-screen my-10 px-4'>
        <h1 className='font-bold text-xl my-10'>Search results ({alljobs.length})</h1>
        <div className='grid grid-cols-3 gap-4 mt-10'>
            {
            alljobs.map((job)=>(
                <Job key={job._id} job={job}/>
            ))
        }
        </div>
        
    </div>
  )
}

export default Browser