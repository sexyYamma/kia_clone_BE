// models/index.js
const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config.json").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Car = require("./car")(sequelize, DataTypes);
db.CarDetail = require("./cardetail")(sequelize, DataTypes);
db.User = require("./user")(sequelize, DataTypes);

module.exports = db;
