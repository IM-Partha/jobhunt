import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Label } from "./label";
import Appliedjob from "./Appliedjob";
import Applicationtable from "./Applicationtable";
import Updateprofile from "./Updateprofile";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAllAppliedJob";

const isHaveResume = true;
const Profile = () => {
  useGetAppliedJobs()
  const { user } = useSelector((store) => store.auth);
 
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8 shadow-sm">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src={user?.profile?.profilePhoto} alt="User" />
            <AvatarFallback>PD</AvatarFallback>
          </Avatar>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {user?.fullname}
            </h2>
            <p className="text-gray-500">{user?.profile?.bio}</p>
          </div>
        </div>

        <Button
          onClick={() => setOpen(true)}
          className="cursor-pointer"
          variant="outline"
          size="icon"
        >
          <Pen className="w-4 h-4" />
        </Button>
      </div>

      {/* Divider */}
      <div className="border-t my-4" />

      {/* Contact Info (Column Layout) */}
      <div className="flex flex-col space-y-4 text-gray-700">
        {/* Email */}
        <div className="flex items-center space-x-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <span>{user?.email}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-2">
          <Contact className="w-4 h-4 text-gray-500" />
          <span>{user?.phoneNumber}</span>
        </div>

        {/* Skills */}
        <div>
          <h1 className="font-medium mb-2 text-gray-800">Skills</h1>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((skill, index) => (
                <Badge key={index}>{skill}</Badge>
              ))
            ) : (
              <span>Na</span>
            )}
          </div>
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isHaveResume ? (
            <a
              target="blank"
              className="cursor-pointer text-blue-500 hover:underline w-full"
              href={user?.profile?.resume}
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span>Na</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl">
        <h1 className="font-bold text-lg mb-5">Applied jobs</h1>
        {/* Application job Table */}
        <Applicationtable />
      </div>
      {/* update profile */}
      <Updateprofile open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
