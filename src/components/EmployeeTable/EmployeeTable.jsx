import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
import "./EmployeeTable.css";
import EmployeeEntry from "./EmployeeEntry/EmployeeEntry";

const EmployeeTable = () => {
  const { employees } = useContext(Context);

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
          {employees.map((employee) => (
            <EmployeeEntry employee={employee} key={employee.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
