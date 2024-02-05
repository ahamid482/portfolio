const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Dotenv Configuration
dotenv.config();

// Rest API Object
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static file access
app.use(express.static(path.join(__dirname, "./client/build")));

// Routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));

app.get("*", function (req, res) {
  res.send(path.join(__dirname, "./client/build/index.html"));
});

// Port
const PORT = 8080 || process.env.PORT;

//Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
