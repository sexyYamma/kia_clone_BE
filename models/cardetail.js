// models/cardetail.js
module.exports = (sequelize, DataTypes) => {
  const CarDetail = sequelize.define("CarDetail", {
    CarName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Rank: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CarSpecification1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CarSpecification2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CarImg: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ReleaseDay: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    High: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Amount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    OutsideColor: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Option1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Option2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return CarDetail;
};
