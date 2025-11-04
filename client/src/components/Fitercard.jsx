import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setsearchquery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-1Lakh", "1Lakh-5Lakh"],
  },
];

const Fitercard = () => {
  const [selectedValue, setselectedValue] = useState("");
  const HandelChange = (value) => {
    setselectedValue(value);
  };
  const dispatch =useDispatch()
  useEffect(() => {
      dispatch(setsearchquery(selectedValue))
  }, [selectedValue]);
  return (
    <section className="bg-white rounded-md shadow-md p-5">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Filter Jobs</h1>
        <hr className="mt-3 mb-4 border-gray-300" />
        <RadioGroup value={selectedValue} onValueChange={HandelChange}>
          {filterData.map((data, index) => (
            <div
              key={index}
              className="w-full bg-gray-50 p-4 rounded-md mb-4 border border-gray-100 hover:shadow-sm transition"
            >
              <h1 className="font-bold text-lg text-gray-700 mb-2">
                {data.filterType}
              </h1>
              {data.array.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center space-x-2 my-2 text-gray-600"
                >
                  <RadioGroupItem value={item} id={`${data.filterType}-${i}`} />
                  <Label
                    htmlFor={`${data.filterType}-${i}`}
                    className="cursor-pointer"
                  >
                    {item}
                  </Label>
                </div>
              ))}
            </div>
          ))}
        </RadioGroup>
      </div>
    </section>
  );
};

export default Fitercard;
