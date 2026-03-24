import React, { useState } from "react";

function ReportForm() {
  const [form, setForm] = useState({ phone: "", bank: "", social: "", description: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    alert("Report submitted!");
    setForm({ phone: "", bank: "", social: "", description: "" });
  };

  return (
    <div>
      <h2>Report a Scam</h2>
      <input name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} />
      <input name="bank" placeholder="Bank account" value={form.bank} onChange={handleChange} />
      <input name="social" placeholder="Social handle" value={form.social} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit Report</button>
    </div>
  );
}

export default ReportForm;
