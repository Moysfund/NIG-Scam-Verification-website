import React from "react";
import Search from "./components/Search";
import ReportForm from "./components/ReportForm";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Nigerian Scam Verification Platform</h1>
      <Search />
      <hr />
      <ReportForm />
    </div>
  );
}

export default App;
