import { React, useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import GroupIcon from '@mui/icons-material/Group';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import SettingsIcon from '@mui/icons-material/Settings';
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const items = {
    overview: {
      title: "Overview",
      path: "/",
      icon: <DashboardIcon size={28} />,
    },
    departments: {
      title: "Departments",
      path: "/departments",
      icon: <HomeWorkIcon size={28} />,
    },
    team: {
      title: "Team",
      path: "/team",
      icon: <GroupIcon size={28} />,
    },
    projects: {
      title: "Projects",
      path: "/projects",
      icon: <AccountTreeIcon size={28} />,
    },
    settings: {
      title: "Settings",
      path: "/settings",
      icon: <SettingsIcon size={28} />,
    },
  };

  return (
    <div
      className="sidebar h-full w-28 lg:w-56 px-6 flex flex-col items-center"
      onClick={() => {
        toggle();
      }}
    >
      <div className="h-20 text-xl font-extrabold flex items-center text-gray-400">
        Sidebar
      </div>
      <div className="pt-3 w-full">
        <SidebarItem {...items.overview} />
        <SidebarItem {...items.departments} />
        <SidebarItem {...items.team} />
        <SidebarItem {...items.projects} />
        <SidebarItem {...items.settings} />
      </div>
    </div>
  );
};

export default Sidebar;
