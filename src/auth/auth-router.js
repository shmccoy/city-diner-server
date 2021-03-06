const express = require("express");
const AuthService = require("./auth-service");
const { requireAuth } = require("../middleware/jwt-auth");

const authRouter = express.Router();
const jsonBodyParser = express.json();

authRouter.post("/login", jsonBodyParser, (req, res, next) => {
  const { user_name, password } = req.body;
  const loginUser = { user_name, password };

  for (const [key, value] of Object.entries(loginUser))
    if (value == null)
      return res.status(400).json({
        error: `Missing '${key}' in request body`,
      });

  AuthService.getUserWithUserName(req.app.get("db"), loginUser.user_name)
    .then((dbUser) => {
      if (!dbUser)
        return res.status(400).json({
          error: "Incorrect user_name or password",
        });

      return AuthService.comparePasswords(
        loginUser.password,
        dbUser.password
      ).then((compareMatch) => {
        if (!compareMatch)
          return res.status(400).json({
            error: "Incorrect user_name or password",
          });

        const sub = dbUser.user_name;
        const payload = { username: dbUser.user_name };

        res.send({
          authToken: AuthService.createJwt(sub, payload),
        });
      });
    })
    .catch((error) => {
      console.log(error);
      next(error);
    });
});

authRouter.post("/refresh", requireAuth, (req, res) => {
  const sub = req.auth_user.user_name;
  const payload = { auth_user_id: req.auth_user.id };
  res.send({
    authToken: AuthService.createJwt(sub, payload),
  });
});

module.exports = authRouter;
