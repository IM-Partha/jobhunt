import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
const Job = ({ job }) => {
  const navigate = useNavigate();
  const daysAgoFound = (mongodbTime) => {
    if (!mongodbTime) return null;
    const createdAt = new Date(mongodbTime);
    if (isNaN(createdAt)) return null;
    const current = new Date();
    const timeDiff = current - createdAt;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  };

  return (
    <section className="p-4 border rounded-lg shadow-sm w-full max-w-md">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          {daysAgoFound(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFound(job?.createdAt)} days ago`}
        </p>

        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="w-4 h-4 cursor-pointer" />
        </Button>
      </div>

      {/* Company section */}
      <div className="flex items-center gap-3 mt-4">
        <Avatar>
          <AvatarImage src={job?.company?.logo} alt="Company Logo" />
        </Avatar>

        <div>
          <h1 className="font-semibold text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div className="">
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job?.position}
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          {job?.salary}
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          onClick={() => navigate(`/detail/${job?._id}`)}
          className="cursor-pointer"
        >
          Details
        </Button>
        <Button className="cursor-pointer bg-[#7209b7]">Save for Later</Button>
      </div>
    </section>
  );
};

export default Job;
