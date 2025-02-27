const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Serve index.html

// API to fetch JSON data
app.get("/api/data", (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error reading data" });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
