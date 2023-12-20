const { DataTypes } = require("sequelize")
const { sequelize } = require("../../database/index")

const User = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  
    {
      timestamps: false,
    }
  )
  
  module.exports = User