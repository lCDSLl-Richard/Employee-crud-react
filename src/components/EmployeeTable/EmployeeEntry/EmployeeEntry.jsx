import React from "react";
import { useContext } from "react";
import { Context } from "../../../context/context";

const EmployeeEntry = ({ employee }) => {
  const { removeEmployee, editEmployee } = useContext(Context);

  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.salary}</td>
      <td>{employee.birth}</td>
      <td>{employee.id}</td>
      <td>
        <button className="edit-btn" onClick={() => editEmployee(employee.id)}>
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => removeEmployee(employee.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EmployeeEntry;
