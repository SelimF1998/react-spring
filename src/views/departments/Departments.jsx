import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Departments = () => {
  const departments = [
    {
      id: 1,
      name: "Marketing",
      description: "Marketing department",
      members: 5,
      projects: 3,
      tasks: 10,
      completed: 5,
    },
    {
      id: 2,
      name: "Sales",
      description: "Sales department",
      members: 5,
      projects: 3,
      tasks: 10,
      completed: 5,
    },
    {
      id: 3,
      name: "IT",
      description: "IT department",
      members: 5,
      projects: 3,
      tasks: 10,
      completed: 5,
    },
    {
      id: 4,
      name: "HR",
      description: "HR department",
      members: 5,
      projects: 3,
      tasks: 10,
      completed: 5,
    },
  ];

  return (
    <div className="departments">
      <h1 className="px-6 py-6 text-gray-300 text-3xl font-extrabold">
        Departments
      </h1>
      <div className="add-button flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-10 rounded">
          Add Department
        </button>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-6 py-4 text-gray-300 font-bold">Name</th>
            <th className="px-6 py-4 text-gray-300 font-bold">Description</th>
            <th className="px-6 py-4 text-gray-300 font-bold">Members</th>
            <th className="px-6 py-4 text-gray-300 font-bold">Projects</th>
            <th className="px-6 py-4 text-gray-300 font-bold">Tasks</th>
            <th className="px-6 py-4 text-gray-300 font-bold">Completed</th>
            <th className="px-6 py-4 text-gray-300 font-bold">Actions</th>
          </tr>
        </thead>
        <tbody >
          {departments.map((department) => (
            <tr key={department.id} className="mx-auto bg-gray-900 mt-96">
              <td className=" px-6 py-4 text-center text-gray-300 font-bold">{department.name}</td>
              <td className=" px-6 py-4 text-center text-gray-300 font-bold">{department.description}</td>
              <td className=" px-6 py-4 text-center text-gray-300 font-bold">{department.members}</td>
              <td className=" px-6 py-4 text-center text-gray-300 font-bold">{department.projects}</td>
              <td className=" px-6 py-4 text-center text-gray-300 font-bold">{department.tasks}</td>
              <td className=" px-6 py-4 text-center text-gray-300 font-bold">{department.completed}</td>
              <td className=" px-6 py-4 text-center text-gray-300 font-bold">
                <div className="flex justify-center">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded">
                    <EditIcon />
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    <DeleteIcon />
                  </button>
                  </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      










      
      



    </div>
  );
};

export default Departments;
