import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <div className="navbar px-6 h-20 flex items-center">
      <div className="flex items-center w-full justify-between">
        <div className="mr-4">
          <SearchIcon size={28} className="text-gray-300" />
          <input
            className="bg-gray-800 text-gray-400 rounded-full px-4 py-2 ml-2 outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex">
          <div className="mr-4">
            <NotificationsIcon size={28} className="text-gray-300" />
          </div>
          <div className="mr-4">
            <BookmarkIcon size={28} className="text-gray-300" />
          </div>
          <div className="mr-4">
            <ForumIcon size={28} className="text-gray-300" />
          </div>
          <div className="avatar online">
            <div className="w-9 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
