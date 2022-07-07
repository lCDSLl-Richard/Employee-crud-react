import React from "react";
import { useContext } from "react";
import { Context } from "../../context/context";
import "./Form.css";

const Form = () => {
  const { form, setForm, addEmployee, initialState, editFlag } =
    useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(form);
    setForm(initialState);
  };

  return (
    <form id="main-form">
      <label className="input-label">Name</label>
      <input
        type="text"
        className="input"
        required
        value={form.name || ""}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <label className="input-label">Salary</label>
      <input
        type="number"
        className="input"
        required
        value={form.salary || ""}
        onChange={(e) => setForm({ ...form, salary: e.target.value })}
      />
      <label className="input-label">Date of Birth</label>
      <input
        type="date"
        className="input"
        required
        value={form.date || ""}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <button onClick={(e) => handleSubmit(e)}>
        {editFlag ? "Update" : "Save"}
      </button>
    </form>
  );
};

export default Form;
