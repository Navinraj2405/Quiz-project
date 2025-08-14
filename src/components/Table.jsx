import React from "react";
function Table({ tableData, handleEdit, handleDelete }) {
    return (
        <table className="w-full border mt-6">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border p-2">Name</th>
                    <th className="border p-2">Email</th>
                     <th className="border p-2">Address</th>
                     <th className="border p-2">Role</th>
                    <th className="border p-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, idx) => (
                    <tr key={idx} className="text-center ">
                        <td className="border border-gray-300 px-4 py-2">{data.name}</td>
                        <td className="border border-gray-300 px-4 py-2">{data.email}</td>
                         <td className="border border-gray-300 px-4 py-2">{data.address}</td>
                         <td className="border border-gray-300 px-4 py-2">{data.role}</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <button
                                onClick={() => handleEdit(idx)}
                                className="ml-2 bg-blue-500 text-white  px-4 py-2 rounded-lg"
                            >
                                Edit
                            </button>

                            <button className="ml-2 bg-red-500 text-white px-4 py-2 rounded-xl" 
                            onClick={() => handleDelete(idx)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    ); 
}

export default Table;
