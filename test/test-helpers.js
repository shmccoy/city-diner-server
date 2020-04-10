const bcrypt = require('bcryptjs')

function makeMenuArray() {
    return [
      {
        id: 1,
        name: 'Strawberry and Broad',
        description: 'Two eggs, served with your choice of bacon, bologna, link or patty sausage, choice of home fries, fried apples or grits and your choice of toast, biscuit or short stack.',
        price: '7.25',
        category: 'Breakfast',
        
      },
      {
        id: 2,
        name: 'Western Omelet',
        description: 'Ham, tomatoes, onions, peppers, mushrooms and American cheese.',
        price: '7.95',
        category: 'Omelets',
        
      },
      {
        id: 3,
        name: 'Irish Benedict',
        description: 'Two poached eggs served over grilled corned beef on a toasted English muffin. Served with fries, fried apples or grits.',
        price: '8.50',
        category: 'Benedicts',
        
      },
      {
        id: 4,
        name: 'French Toast Combo',
        description: 'With your choice of bacon, City ham, link or sausage patty.',
        price: '6.50',
        category: 'Pancakes',
        
      },
    ]
}

function makeExpectedMenu(menu) {
     
    return {
      id: menu.id,
      name: menu.name,
      description: menu.description,
      price: menu.price,
      category: menu.category,
    }
}  

function makeMaliciousMenu(menu) {
    const maliciousMenu = {
      id: 911,
      name: 'Naughty naughty very naughty <script>alert("xss");</script>',
      menu_id: menu.id,
      description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
    }
    const expectedMenu = {
      ...makeExpectedMenu([menu], maliciousMenu),
      name: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
    }
    return {
      maliciousMenu,
      expectedMenu,
    }
}
  
function makeMenuFixtures() {
    const testMenu = makeMenuArray()
    return { testMenu }
}
  
function cleanTables(db) {
    return db.raw(
      `TRUNCATE
        menu,
        auth_user
        RESTART IDENTITY CASCADE`
    )
    .then(() =>
      Promise.all([
        trx.raw(`ALTER SEQUENCE menu_id_seq minvalue 0 START WITH 1`),
        trx.raw(`ALTER SEQUENCE auth_user_id_seq minvalue 0 START WITH 1`),
        trx.raw(`SELECT setval('menu_id_seq', 0)`),
        trx.raw(`SELECT setval('auth_user_id_seq', 0)`),
      ])
    )
}

function seedUsers(db, auth_user) {
  const preppedUsers = auth_user.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, 1)
  }))
  return db.into('auth_user').insert(preppedUsers)
    .then(() =>
    db.raw(
      `SELECT setval('blogful_users_id_seq', ?)`,
      [auth_user[auth_user.length - 1].id], 
    ))
}

function seedMenuTable(db, menu) {
  return db.transaction(async trx => {
    await trx.into('menu').insert(articles)
    await trx.raw(
      `SELECT setval('menu_id_seq', ?)`,
      [articles[articles.length - 1].id],
    )
  })
}  
  
function seedMaliciousMenu(db, menu) {
    return db
      .into('menu')
      .insert([menu])
      .then(() =>
        db
          .into('menu')
          .insert([menu])
      )
}
  
module.exports = {
  makeMenuArray,
  makeExpectedMenu,
  makeMaliciousMenu,
  
  makeMenuFixtures,
  cleanTables,
  seedMenuTable,
  seedMaliciousMenu,
}

