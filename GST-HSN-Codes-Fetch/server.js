const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/products");

const app = express();
const PORT = process.env.PORT || 5050;


app.use(cors());
app.use(express.json());

// ✅ Test Route (Add This)
app.get("/test", (req, res) => {
  res.send("API is working");
});

// ✅ Product Route
app.use("/api/products", productRoutes);

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`HSN-GST API running at http://localhost:${PORT}`);
});
