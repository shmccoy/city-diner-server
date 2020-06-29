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
  .use(cors())
  .use(
    morgan(NODE_ENV === "production" ? "tiny" : "common", {
      skip: () => NODE_ENV === "test",
    })
  )
  .use(helmet())

  .use(express.json())

  .use("/api/menu", menuRouter)
  .use("/api/auth", authRouter)

  .use("/api/admin", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(function errorHandler(error, req, res, next) {
  console.error(error);
  let response;
  if (NODE_ENV === "production") {
    response = { error: "Server error" };
  } else {
    response = { error: error.message, object: error };
  }
  res.status(500).json(response);
});

module.exports = app;
