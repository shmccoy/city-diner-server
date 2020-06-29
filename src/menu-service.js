const xss = require("xss");

const MenuService = {
  getAllMenu(knex) {
    return knex.select("*").from("menu");
  },
  getByCategory(knex, category) {
    return knex.from("menu").select("*").where("category", category);
  },
  insertMenu(knex, newMenu) {
    return knex
      .insert(newMenu)
      .into("menu")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex.from("menu").select("*").where("id", id).first();
  },
  deleteMenu(knex, id) {
    return knex("menu").where({ id }).delete();
  },
  updateMenu(knex, id, newMenuFields) {
    return knex("menu").where({ id }).update(newMenuFields);
  },
};

module.exports = MenuService;
