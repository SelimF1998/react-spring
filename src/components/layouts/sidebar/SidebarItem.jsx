import React from 'react'
import { Link } from 'react-router-dom'

const SidebarItem = ({ title, path, icon }) => {
  return (
    <Link
            to={ path }
            className="flex justify-center lg:justify-start lg:pl-8 py-4 hover:bg-white/5 cursor-pointer rounded-md select-none text-gray-400"
        >
            {icon}
            <div className="ml-3 text-xl font-bold hidden lg:block text-gray-400">
                {title}
            </div>
        </Link>
  )
}

export default SidebarItem