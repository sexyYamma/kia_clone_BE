// routes/car.js
const express = require("express");
const router = express.Router();
const db = require("../models");
const Car = db.sequelize.models.Car;

// Get all cars
router.get("/", async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});

module.exports = router;
