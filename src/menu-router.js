const express = require("express");
const xss = require('xss')
const MenuService = require("./menu-service");

const MenuService = express.Router();
const bodyParser = express.json();

const serializeMenu = menu => ({
  id: menu.id,
  name: menu.name,
  description: menu.description,
  price: Number(menu.price),
  category: menu.category
});

menuRouter
  .route("/menu")
  .get((req, res, next) => {
    MenuService.getAllMenu(req.app.get("db"))
      .then(menu => {
        res.json(menu.map(serializeMenu));
      })
      .catch(next);
  })
  .post(bodyParser, (req, res) => {
    for (const field of ["name", "price", "category"]) {
      if (!req.body[field]) {
        return res.status(400).json({
          error: { message: `Missing '${field}' in request body` }
        });
      }
    }
  });

menuRouter
  .route('/:menu_id')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db')
    MenuService.getById(knexInstance, req.params.menu_id)
      .then(menu => {
        if (!item) {
          return res.status(404).json({
            error: { message: `Item doesn't exist` }
          })
        }
        res.json({})  
