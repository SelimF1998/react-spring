import React, { useState, useEffect } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import UsersModal from "./UsersModal";

const Users = () => {
  

  return (
    <div className="users">
      <h1 className="px-6 py-6 text-gray-300 text-3xl font-extrabold">Users</h1>
      <div
        className="button mt-5 flex justify-end mr-6">
        <label htmlFor="my-modal" className="btn">Add User<span className="ml-1">
          <AddIcon />
          </span></label>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto w-auto px-6">
          <table className="table w-full">
            <thead>
              <tr>
                <th
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <label>
                    <input type="checkbox" className="checkbox bg-gray-300" />
                  </label>
                </th>
                <th
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Name
                </th>
                <th
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Job
                </th>
                <th
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Favorite Color
                </th>
                <th
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <label>
                    <input type="checkbox" className="checkbox bg-gray-300" />
                  </label>
                </th>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Purple
                </td>
                <th
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>

              <tr>
                <th
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <label>
                    <input type="checkbox" className="checkbox bg-gray-300" />
                  </label>
                </th>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-3@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Brice Swyre</div>
                      <div className="text-sm opacity-50">China</div>
                    </div>
                  </div>
                </td>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </td>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Red
                </td>
                <th
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>

              <tr>
                <th
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <label>
                    <input type="checkbox" className="checkbox bg-gray-300" />
                  </label>
                </th>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-4@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Marjy Ferencz</div>
                      <div className="text-sm opacity-50">Russia</div>
                    </div>
                  </div>
                </td>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Rowe-Schoen
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Office Assistant I
                  </span>
                </td>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Crimson
                </td>
                <th
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>

              <tr>
                <th
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <label>
                    <input type="checkbox" className="checkbox bg-gray-300" />
                  </label>
                </th>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-5@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Yancy Tear</div>
                      <div className="text-sm opacity-50">Brazil</div>
                    </div>
                  </div>
                </td>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Wyman-Ledner
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Community Outreach Specialist
                  </span>
                </td>
                <td
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  Indigo
                </td>
                <th
                  className="text-gray-300"
                  style={{
                    backgroundColor: "#161b22",
                  }}
                >
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Congratulations random Internet user!
            </h3>
            <p className="py-4">
              You've been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn">
                Yay!
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
