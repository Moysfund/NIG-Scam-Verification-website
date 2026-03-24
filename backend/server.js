const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { reports, addReport, searchReports } = require("./dataStore");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Search endpoint
app.get("/search", (req, res) => {
  const { query } = req.query;
  const results = searchReports(query);
  res.json({ results });
});

// Report endpoint
app.post("/report", (req, res) => {
  const { phone, bank, social, description } = req.body;
  addReport({ phone, bank, social, description });
  res.json({ message: "Report submitted successfully" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
