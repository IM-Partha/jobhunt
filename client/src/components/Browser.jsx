import React from 'react'
import Job from './Job';

const randomjobs = [1,2,3];
const Browser = () => {
  return (
    <div className='max-w-7xl mx-auto my-10 px-4'>
        <h1 className='font-bold text-xl my-10'>Search results ({randomjobs.length})</h1>
        <div className='grid grid-cols-3 gap-4 mt-10'>
            {
            randomjobs.map((item,index)=>(
                <Job key={index}/>
            ))
        }
        </div>
        
    </div>
  )
}

export default Browser