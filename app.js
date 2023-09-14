const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const cors = require("cors");
app.use(
    cors({
      origin: "*",
    })
  );


const dotenv = require("dotenv");
dotenv.config();

const sequelize = require("./Utils/database");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRouter = require("./Routes/userRoutes");

//Middleware
app.use("/", userRouter);
app.use("/user", userRouter);

sequelize
  .sync()
  .then((result) => {
    app.listen(process.env.PORT || 3000);
  })
  .catch((err) => console.log(err));