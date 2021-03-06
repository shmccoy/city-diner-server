const knex = require("knex");
const jwt = require("jsonwebtoken");
const app = require("../src/app");
const helpers = require("./test-helpers");

describe("Auth Endpoints", function () {
  let db;

  const { testMenu } = helpers.makeMenuFixtures();
  const testUser = helpers.makeUserArray();

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("cleanup", () => helpers.cleanTables(db));

  afterEach("cleanup", () => helpers.cleanTables(db));

  describe(`POST /admin`, () => {
    beforeEach("insert users", () => helpers.seedUsers(db, testUser));

    const requiredFields = ["user_name", "password"];

    requiredFields.forEach((field) => {
      const loginAttemptBody = {
        user_name: testUser[0].user_name,
        password: testUser[0].password,
      };

      it(`responds with 400 required error when '${field}' is missing`, () => {
        delete loginAttemptBody[field];

        return supertest(app)
          .post("/admin")
          .send(loginAttemptBody)
          .expect(400, {
            error: `Missing '${field}' in request body`,
          });
      });
    });
    it(`responds 400 'invalid user_name or password' when bad user_name`, () => {
      const userInvalidUser = { user_name: "user-not", password: "existy" };
      return supertest(app)
        .post("/admin")
        .send(userInvalidUser)
        .expect(400, { error: `Incorrect user_name or password` });
    });

    it(`responds 400 'invalid user_name or password' when bad password`, () => {
      const userInvalidPass = {
        user_name: testUser[0].user_name,
        password: "incorrect",
      };
      return supertest(app)
        .post("/admin")
        .send(userInvalidPass)
        .expect(400, { error: `Incorrect user_name or password` });
    });

    it(`responds 200 and JWT auth token using secret when valid credentials`, () => {
      const userValidCreds = {
        user_name: testUser[0].user_name,
        password: testUser[0].password,
      };
      const expectedToken = jwt.sign(
        testUser[0].user_name, // payload
        process.env.JWT_SECRET,
        {
          subject: testUser[0].user_name,
          expiresIn: process.env.JWT_EXPIRY,
          algorithm: "HS256",
        }
      );
      return supertest(app)
        .post("/admin/refresh")
        .send(userValidCreds)
        .expect(200, {
          authToken: expectedToken,
        });
    });
  });
});
