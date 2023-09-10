import React from "react";
import { BiRun } from "react-icons/bi";
import { Link } from "react-router-dom";
import { backend_url } from "../../../server";
import { useSelector } from "react-redux";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <div className="flex">
            <span className="font-bold text-teal-400">RunnersRealm</span>
            <BiRun size={24} className="ml-1 text-teal-600" />
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <img
            src={`${backend_url}${user.avatar}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
