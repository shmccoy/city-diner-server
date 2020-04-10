const xss = require('xss')


const MenuService = {
  getAllMenu(knex) {
    return knex.select('*').from('menu')
  },
  insertMenu(knex, newMenu) {
    return knex
      .insert(newMenu)
      .into('menu')
      .returning('*')
      .then(rows => {
        return rows[0]
      })
  },
  getById(knex, id) {
    return knex.from('menu').select('*').where('id', id).first()
  },
  deleteNote(knex, id) {
    return knex('menu')
      .where({ id })
      .delete()
  },
  updateNote(knex, id, newMenuFields) {
    return knex('menu')
      .where({ id })
      .update(newMenuFields)
  },
}

module.exports = MenuService