const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helpers')

describe('Menu Endpoint', function() {
  let db

  const { testMenu } = helpers.makeMenuFixtures()

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.DB_URL,
    })
    app.set('db', db)
  })

  after('disconnect from db', () => db.destroy())

  before('cleanup', () => helpers.cleanTables(db))

  afterEach('cleanup', () => helpers.cleanTables(db))

  beforeEach('insert menu', () =>
    helpers.seedMenuTable(
      db,
      testMenu,
    )
  )

  describe(`GET /menu`, () => {
    context(`Given no menu`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/menu')
          .expect(200, [])
      })
    })

    context('Given there are menu in the database', () => {
      beforeEach('insert menu', () =>
        helpers.seedMenuTable(
          db,
          testMenu
        )
      )

      it('responds with 200 and all of the menu', () => {
        const expectedmenu = testMenu.map(Menu =>
          helpers.makeExpectedMenu(testMenu)
        )
        return supertest(app)
          .get('/menu')
          .expect(200, expectedMenu)
      })
    })

    context(`Given an XSS attack menu`, () => {
      const testMenu = helpers.makeMenuArray()[1]
      const {
        maliciousMenu,
        expectedMenu,
      } = helpers.makeMaliciousMenu(testMenu)

      beforeEach('insert malicious menu', () => {
        return helpers.seedMaliciousMenu(
          db,
          testMenu,
          maliciousMenu,
        )
      })

      it('removes XSS attack description', () => {
        return supertest(app)
          .get(`/menu`)
          .expect(200)
          .expect(res => {
            expect(res.body[0].name).to.eql(expectedMenu.name)
            expect(res.body[0].description).to.eql(expectedMenu.description)
            expect(res.body[0].price).to.eql(expectedMenu.price)
            expect(res.body[0].category).to.eql(expectedMenu.category)
          })
      })
    })
  })

  describe(`GET /menu/:menu_id`, () => {
    context(`Given no menu`, () => {
      it(`responds with 404`, () => {
        const menuId = 123456
        return supertest(app)
          .get(`/menu/${menuId}`)
          .expect(404, { error: `Menu doesn't exist` })
      })
    })

    context('Given there are menu in the database', () => {
      beforeEach('insert menu', () =>
        helpers.seedMenuTable(db, testMenu)
      )

      it('responds with 200 and the specified Menu', () => {
        const menuId = 2
        const expectedMenu = helpers.makeExpectedMenu(
          testMenu, testMenu[menuId - 1])

        return supertest(app)
          .get(`/menu/${menuId}`)
          .expect(200, expectedMenu)
      })
    })

    context(`Given an XSS attack Menu`, () => {
      const testMenu = helpers.makeMenuArray()[1]
      const {
        maliciousMenu,
        expectedMenu,
      } = helpers.makeMaliciousMenu(testMenu)

      beforeEach('insert malicious Menu', () => {
        return helpers.seedMaliciousMenu(
          db,
          testMenu,
          maliciousMenu,
        )
      })

      it('removes XSS attack description', () => {
        return supertest(app)
          .get(`/menu/${maliciousMenu.id}`)
          .expect(200)
          .expect(res => {
            expect(res.body.name).to.eql(expectedMenu.name)
            expect(res.body.description).to.eql(expectedMenu.description)
            expect(res.body.price).to.eql(expectedMenu.price)
            expect(res.body.category).to.eql(expectedMenu.category)
          })
      })
    })
  })
  
})