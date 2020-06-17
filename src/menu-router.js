const path = require("path");
const express = require("express");
const xss = require("xss");
const MenuService = require("./menu-service");

const menuRouter = express.Router();
const jsonParser = express.json();

menuRouter
  .route("/")
  .get((req, res, next) => {
    MenuService.getAllMenu(req.app.get("db"))
      .then((menu) => {
        res.json(menu);
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { name, description, price, category } = req.body;
    const newMenu = { name, description, price, category };

    for (const [key, value] of Object.entries(newMenu))
      if (value == null)
        return res.status(400).json({
          error: { message: `Missing '${key}' in request body` },
        });

    MenuService.insertMenu(req.app.get("db"), newMenu)
      .then((menu) => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${menu.id}`))
          .json(menu);
      })
      .catch(next);
  });

menuRouter
  .route("/menu/:category")

  .all((req, res, next) => {
    const { category } = req.params;
    MenuService.getByCategory(req.app.get("db"), category)
      .then((result) => {
        if (!result) {
          logger.error(`No products in category ${result} found.`);
          return res.status(404).json({
            error: { message: `Category Not Found` },
          });
        }
        res.category = result;
        next();
      })
      .catch(next);
  })

  .get((req, res) => {
    res.json(res.category);
  });

menuRouter
  .route("/:menu_id")
  .all((req, res, next) => {
    MenuService.getById(req.app.get("db"), req.params.menu_id)
      .then((menu) => {
        if (!menu) {
          return res.status(404).json({
            error: { message: `Menu doesn't exist` },
          });
        }
        res.menu = menu;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(res.menu);
  })
  .delete((req, res, next) => {
    MenuService.deleteMenu(req.app.get("db"), req.params.menu_id)
      .then((numRowsAffected) => {
        res.status(204).end();
      })
      .catch(next);
  })
  .patch(jsonParser, (req, res, next) => {
    const { name, description, price, category } = req.body;
    const menuToUpdate = { name, description, price, category };

    const numberOfValues = Object.values(menuToUpdate).filter(Boolean).length;
    if (numberOfValues === 0)
      return res.status(400).json({
        error: {
          message: `Request body must contain either 'content' or 'modified'`,
        },
      });

    MenuService.updatemenu(req.app.get("db"), req.params.menu_id, menuToUpdate)
      .then((numRowsAffected) => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = menuRouter;
