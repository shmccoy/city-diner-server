const express = require("express");
const path = require("path");
const UserService = require("./user-service");

const userRouter = express.Router();
const jsonBodyParser = express.json();

userRouter.post("/", jsonBodyParser, (req, res, next) => {
  const { password, user_name } = req.body;

  for (const field of ["user_name", "password"])
    if (!req.body[field])
      return res.status(400).json({
        error: `Missing '${field}' in request body`,
      });

  const passwordError = UserService.validatePassword(password);

  if (passwordError) return res.status(400).json({ error: passwordError });
});

module.exports = userRouter;
