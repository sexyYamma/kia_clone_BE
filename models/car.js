// models/car.js
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define("Car", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Car;
};
