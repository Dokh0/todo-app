const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Category = sequelize.define(
  "category",
  {
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },

  {
    timestamps: false,
  }
);

module.exports = Category