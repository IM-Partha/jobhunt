import React from 'react'
import Hearosection from './Hearosection'
import Categorycarousel from './Categorycarousel'
import Latestjobs from './Latestjobs'
import useGetAllJobs from '@/hooks/useGetAllJobs'

const Home = () => {
  useGetAllJobs()
  return (
    <div>
      <Hearosection/>
      <Categorycarousel/>
      <Latestjobs/>

    </div>
  )
}

export default Home