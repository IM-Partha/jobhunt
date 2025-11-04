import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Adminjobstable = () => {
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJob, setfilterJob] = useState(allAdminJobs);
  const Navigate = useNavigate();
  useEffect(() => {
    const filteredJobs =
      allAdminJobs?.filter((job) => {
        if (!searchJobByText) return true;

        const text = searchJobByText.toLowerCase();
        return (
          job?.company?.name?.toLowerCase().includes(text) ||
          job?.title?.toLowerCase().includes(text)
        );
      }) || [];

    setfilterJob(filteredJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 h-screen overflow-x-scroll">
      <Table>
        <TableCaption>A list of your recently jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {filterJob && filterJob.length > 0 ? (
            filterJob.map((job) => (
              <TableRow key={job._id}>
                
                <TableCell>{job?.company?.name}</TableCell>
                <TableCell>{job?.title}</TableCell>
                <TableCell>
                  {new Date(job.createdAt).toLocaleDateString()}
                </TableCell>

                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-40">
                      <div className="flex flex-col gap-2">
                        <Button
                          variant="ghost"
                          className="flex items-center justify-start gap-2 text-left"
                          onClick={() =>
                            Navigate(`/admin/companies/${job._id}`)
                          }
                        >
                          <Edit2 size={16} /> Edit
                        </Button>
                        <Button
                          variant="ghost"
                          className="flex items-center justify-start gap-2 text-left"
                          onClick={() =>
                            Navigate(`/admin/jobs/${job._id}/applicants`)
                          }
                        >
                          <Eye size={16} /> Applicants
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan="4" className="text-center text-gray-500 py-4">
                No companies found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Adminjobstable;
