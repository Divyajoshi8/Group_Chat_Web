const Sequelize = require("sequelize");

const sequelize = new Sequelize("group_chat", "root", "Divya&joshi8",{
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;