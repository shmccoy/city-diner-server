require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const { NODE_ENV, API_TOKEN } = require("./config");
const validateBearerToken = require("./validate-bearer-token");
const menuRouter = require("./menu-router");
const authRouter = require("./auth/auth-router");
const userRouter = require("./user-router");

const app = express();

app
  .use(
    morgan(NODE_ENV === "production" ? "tiny" : "common", {
      skip: () => NODE_ENV === "test",
    })
  )
  .use(helmet())
  .use(cors())
  //.use(validateBearerToken)
  .use(express.json())
  //.use(user_router)
  .use("/api/menu", menuRouter)

  .use("/api/admin", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: "Server error" };
  } else {
    console.error(error);
    response = { error: error.message, object: error };
  }
  res.status(500).json(response);
});

module.exports = app;
