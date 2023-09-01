"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employees.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      designation: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      experience: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull:false,
      },
    },
    {
      sequelize,
      modelName: "Employees",
    }
  );
  return Employees;
};
