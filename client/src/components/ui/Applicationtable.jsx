import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './table'
import { Badge } from './badge'
import { useSelector } from 'react-redux'

const Applicationtable = () => {
     const {AllAppliedJobs} =useSelector(store=>store.job)
  return (
    <div>
        <Table>
            <TableCaption>A List of Your Applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                AllAppliedJobs.length<=0?<span>You haven't applied any job yet</span> : AllAppliedJobs.map((item,i)=>(
                    <TableRow key={i}>
                        <TableCell>{item?.createdAt?.split("T")[0]}</TableCell>
                        <TableCell>{item?.job?.company?.name}</TableCell>
                        <TableCell>{item?.job?.title}</TableCell>
                        <TableCell className="text-right"><Badge className={`${item?.status === "rejected" ? 'bg-red-400' : item.status === 'pending' ? 'bg-gray-400' : 'bg-green-400'}`}>{item?.status}</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
        
        </Table>
    </div>
  )
}

export default Applicationtable