process.env.TZ = 'UTC'
process.env.NODE_ENV = 'test'
process.env.JWT_SECRET = 'test-jwt-secret'
process.env.JWT_EXPIRY = '3m'

process.env.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL 
|| "postgresql://postgres:100680@localhost/menu-test"


require('dotenv').config()
const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest