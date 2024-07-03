// routes/cardetail.js
const express = require("express");
const router = express.Router();
const db = require("../models");
const CarDetail = db.sequelize.models.CarDetail;

// Get all car details
router.get("/", async (req, res) => {
  try {
    const carDetails = await CarDetail.findAll();
    res.json(carDetails);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch car details" });
  }
});

module.exports = router;
