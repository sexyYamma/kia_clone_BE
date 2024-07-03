// index.js
const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.json());

db.sequelize
  .sync()
  .then(() => console.log("Database synced"))
  .catch((err) => console.log("Error: " + err));

// Routes
const carRouter = require("./routes/car");
const carDetailRouter = require("./routes/cardetail");
const authRouter = require("./routes/auth");

app.use("/api/cars", carRouter);
app.use("/api/cardetails", carDetailRouter);
app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
