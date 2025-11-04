import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSinglejob } from "@/redux/jobSlice";
import { JobcraereApi } from "@/urls/Apiurl";

const CompanyCreate = () => {
  const [companyName, setCompanyName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(`${JobcraereApi}/register`, {companyName:companyName}, {
        withCredentials: true,
      });

      if (res?.data?.success) {
        dispatch(setSinglejob(res.data.company));
        toast.success(res?.data?.message);
        const companyId = res?.data?.comapny?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while creating the company");
    }
  };

  return (
    <div className="max-w-4xl mx-auto h-screen">
      <div className="my-10">
        <h1 className="font-bold text-2xl">Your Company Name</h1>
        <p className="text-gray-500">
          What would you like to name your company?
        </p>
      </div>

      <Label>Company Name</Label>
      <Input
        name="companyName"
        onChange={(e) => setCompanyName(e.target.value)}
        type="text"
        className="my-2"
        placeholder="Company name"
      />

      <div className="flex items-center gap-2 my-10">
        <Button onClick={() => navigate("/admin/companies")} variant="outline">
          Cancel
        </Button>
        <Button onClick={registerNewCompany}>Continue</Button>
      </div>
    </div>
  );
};

export default CompanyCreate;
