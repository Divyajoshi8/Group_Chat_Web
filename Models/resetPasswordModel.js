const sequelize = require("sequelize");
const db = require("../Utils/database");

const ResetPassword = db.define("ResetPassword", {
  id: {
    type: sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  isActive: sequelize.BOOLEAN,
});

module.exports = ResetPassword;

