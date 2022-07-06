import React from "react";
import "./EmployeeTable.css";

const EmployeeTable = () => {
  return (
    <div className="table-container">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Date of Birth</th>
            <th>ID</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>Ricardo</td>
            <td>15000</td>
            <td>05-12-2003</td>
            <td>0</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Ricardo</td>
            <td>15000</td>
            <td>05-12-2003</td>
            <td>0</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
