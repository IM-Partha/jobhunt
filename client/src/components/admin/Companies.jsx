import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Companiestable from "./Companiestable";
import { useNavigate } from "react-router-dom";
import useGteAllCompanies from "@/hooks/useGteAllCompanies";
import { useDispatch, useSelector } from "react-redux";
import { setsearchCompnayByText } from "@/redux/companySlice";

const Companies = () => {
  useGteAllCompanies();
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);
  const [filter, setFilter] = useState("");
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(setsearchCompnayByText(filter))
  },[filter, dispatch])

  

  return (
    <div className="max-w-6xl mx-auto my-10 h-screen">
      {/* Header controls */}
      <div className="flex items-center justify-between my-5">
        <Input
          className="w-1/3"
          placeholder="Filter by name..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <Button onClick={() => navigate("/admin/companies/create")}>
          + New Company
        </Button>
      </div>

      {/* Table */}
      <Companiestable  />
    </div>
  );
};

export default Companies;
