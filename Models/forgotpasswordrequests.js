const Sequelize = require('sequelize');
const sequelize = require('../Utils/database');

const ForgotPasswordRequests = sequelize.define("forgotpasswordrequests", {
    uuid:{
        type:Sequelize.STRING,
      },
    userId:{
        type:Sequelize.INTEGER,
    },
    isactive:{
        type:Sequelize.BOOLEAN,
    }
});

module.exports = ForgotPasswordRequests;

