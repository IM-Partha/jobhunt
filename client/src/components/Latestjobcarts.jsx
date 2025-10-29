import React from "react";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Latestjobcarts = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-5 shadow-md hover:shadow-lg transition cursor-pointer flex flex-col justify-between h-full">
      {/* Company Info */}
      <div>
        <h1 className="font-semibold text-lg text-gray-800">
          {item?.company?.name}
        </h1>
        <p className="text-sm text-gray-500 mb-3">{item?.location}</p>

        {/* Job Info */}
        <h2 className="font-bold text-xl mb-2">{item?.job?.title}</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          {item?.description}
        </p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-700 font-semibold" variant="ghost">
          {item?.position}
        </Badge>
        <Badge className="text-[#F83002] font-semibold" variant="ghost">
         {item?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-semibold" variant="ghost">
          {item?.salary}
        </Badge>
      </div>
      {/* <div className="flex items-center gap-4 mt-4">
        <Button
          variant="outline"
          onClick={() => navigate(`/detail/${1}`)}
          className="cursor-pointer"
        >
          Details
        </Button>
        <Button className="cursor-pointer bg-[#7209b7]">Save for Later</Button>
      </div> */}
    </div>
  );
};

export default Latestjobcarts;
