import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import * as Popover from "@radix-ui/react-popover";
import * as Avatar from "@radix-ui/react-avatar";
import { LogOut, User2, User2Icon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Apiurl } from "@/urls/Apiurl";
import { toast } from "sonner";
import { setAuthUser } from "@/redux/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const { user } = useSelector((store) => store.auth);
  async function LogoutHandel() {
    try {
      const res = await axios.get(`${Apiurl}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setAuthUser(null));
        naviagte("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="bg-white shadow">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Portal</span>
          </h1>
        </div>

        {/* Nav links + Avatar */}
        <div className="flex items-center gap-6">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/" className="hover:text-[#F83002] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:text-[#F83002] transition">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/browse" className="hover:text-[#F83002] transition">
                Browse
              </Link>
            </li>
          </ul>

          {/* Avatar Popover */}
          {!user ? (
            <div className="flex gap-3">
              <Link to="/login">
                <Button variant="outline" className="cursor-pointer">
                  Login
                </Button>
              </Link>

              <Link to="/register">
                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <Popover.Root>
              <Popover.Trigger asChild>
                <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden cursor-pointer border hover:scale-105 transition">
                  <Avatar.Image
                    src={user?.profile?.profilePhoto}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                  <Avatar.Fallback className="flex items-center justify-center bg-gray-200 text-gray-600 font-semibold">
                    U
                  </Avatar.Fallback>
                </Avatar.Root>
              </Popover.Trigger>

              <Popover.Portal>
                <Popover.Content
                  align="end"
                  sideOffset={8}
                  className="bg-white border rounded-lg shadow-md p-4 w-48"
                >
                  <p className="font-medium mb-3 text-gray-700">
                    Hello, {user.fullname}
                  </p>

                  <div className="flex flex-col gap-2">
                    <Link to="/profile">
                      <Button
                        variant="outline"
                        className=" cursor-pointer w-full"
                      >
                        <User2Icon />
                        <Link to={"/profile"}>View Profile</Link>
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      onClick={LogoutHandel}
                      className="cursor-pointer w-full"
                    >
                      <LogOut />
                      Logout
                    </Button>
                  </div>

                  <Popover.Arrow className="fill-white" />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
