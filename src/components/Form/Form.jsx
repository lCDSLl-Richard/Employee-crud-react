import React from "react";
import { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialState = { name: "", salary: 0, date: "" };

  const [form, setForm] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <button onClick={handleSubmit}>Save</button>
    </form>
  );
};

export default Form;
