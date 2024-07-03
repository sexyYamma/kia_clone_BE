// seed.js
const db = require("./models");
const carData = require("./car.json");
const carDetailData = require("./cardetail.json");

// 모델을 올바르게 가져오는지 확인
const { Car, CarDetail } = db;

const seedDatabase = async () => {
  try {
    await db.sequelize.sync({ force: true });
    await Car.bulkCreate(carData);
    await CarDetail.bulkCreate(carDetailData);
    console.log("Database seeded");
  } catch (err) {
    console.error("Error seeding database: ", err);
  } finally {
    process.exit();
  }
};

seedDatabase();
