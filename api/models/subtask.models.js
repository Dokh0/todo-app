const { DataTypes } = require("sequelize");
const { sequelize } = require("../../database/index");

const Subtask = sequelize.define(
  "subtask",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    timestamps: false,
  }
)

module.exports = Subtask