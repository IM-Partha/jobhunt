import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";
import { JobcraereApi } from "@/urls/Apiurl";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetCompanyByid from "@/hooks/useGetCompanyByid";

const CompanySetup = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const params = useParams();
  useGetCompanyByid(params.id);
  const {singleCompany } =useSelector(store=>store.company)
  const [loading, setLoading] = useState(false);
 
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", input.name);
    formdata.append("description", input.description);
    formdata.append("website", input.website);
    formdata.append("location", input.location);

    if (input.file) {
      formdata.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `${JobcraereApi}/update/${params.id}`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
useEffect(()=>{
setInput({
  name: singleCompany?.name || "",
  description: singleCompany?.description || "",
  website: singleCompany?.website || "",
  location: singleCompany?.location || "",
  file: singleCompany?.file || "",
});

},[singleCompany])
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <Button
            onClick={() => navigate("/admin/companies")}
            variant="outline"
            className="flex items-center gap-2 text-gray-600 font-medium hover:bg-gray-100"
            type="button"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Button>
          <h1 className="font-bold text-2xl text-gray-800">Company Setup</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Company Name</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="e.g. JobHunt, Microsoft"
              />
            </div>

            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={handleChange}
                placeholder="Short company summary"
              />
            </div>

            <div>
              <Label>Website</Label>
              <Input
                type="text"
                name="website"
                value={input.website}
                onChange={handleChange}
                placeholder="https://example.com"
              />
            </div>

            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={handleChange}
                placeholder="City, Country"
              />
            </div>

            <div className="md:col-span-2">
              <Label>Logo</Label>
              <Input type="file" accept="image/*" onChange={handleFileChange} />
              {input.file && (
                <p className="text-sm text-gray-500 mt-2">
                  Selected: {input.file.name}
                </p>
              )}
            </div>
          </div>

          {loading ? (
            <Button>
              <Loader2 className="w-full  text-white cursor-pointer animate-spin  " />{" "}
              Please wait
            </Button>
          ) : (
            <Button className="w-full mt-8" type="submit">
              Update
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
