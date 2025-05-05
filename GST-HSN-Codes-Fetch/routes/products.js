const express = require("express");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Path to your hsn.json file
const hsnFilePath = path.join(__dirname, "../output/hsn.json");
const hsnData = JSON.parse(fs.readFileSync(hsnFilePath, "utf-8"));

// ✅ Filter route
router.get("/", (req, res) => {
  const { hsn, desc } = req.query;

  let filtered = hsnData;

  if (hsn) {
    filtered = filtered.filter((item) =>
      item.hsn?.replace(/\s/g, "") === hsn
    );
  }

  if (desc) {
    filtered = filtered.filter((item) =>
      item.description?.toLowerCase().includes(desc.toLowerCase())
    );
  }

  res.json(filtered);
});

module.exports = router;
