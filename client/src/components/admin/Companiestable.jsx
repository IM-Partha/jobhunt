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
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Companiestable = () => {
  const { companies, searchCompnayByText } = useSelector(
    (store) => store.company
  );
  const [filterCompany, setfilterCompany] = useState(companies);
  const Navigate = useNavigate();
  useEffect(() => {
    const filteredCompany =
      companies?.filter((company) => {
        if (!searchCompnayByText) return true;
        return company?.name
          ?.toLowerCase()
          .includes(searchCompnayByText.toLowerCase());
      }) || [];

    setfilterCompany(filteredCompany);
  }, [companies, searchCompnayByText]);

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4 h-screen overflow-x-scroll">
      <Table>
        {/* <TableCaption>
          A list of your recently registered companies.
        </TableCaption> */}

        {/* Table Header */}
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {filterCompany && filterCompany.length > 0 ? (
            filterCompany.map((company) => (
              <TableRow key={company._id}>
                <TableCell>
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={company.logo || "https://via.placeholder.com/40"}
                      alt={company.name}
                    />
                    <AvatarFallback>
                      {company.name?.charAt(0).toUpperCase() || "C"}
                    </AvatarFallback>
                  </Avatar>
                </TableCell>

                <TableCell>{company.name}</TableCell>
                <TableCell>
                  {new Date(company.createdAt).toLocaleDateString()}
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
                            Navigate(`/admin/companies/${company._id}`)
                          }
                        >
                          <Edit2 size={16} /> Edit
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

export default Companiestable;
