const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

const AuthService = {
    getUserWithUserName(db, user_name) {
      return db('auth_user')
        .where({ user_name })
        .first()
    },
    comparePasswords(password, hash) {
        return bcrypt.compare(password, hash)
    },
    createJwt(subject, payload) {
        return jwt.sign({user_name:payload}, config.JWT_SECRET, {
          subject,
          expiresIn: config.JWT_EXPIRY,
          algorithm: 'HS256',
        })
    },
    verifyJwt(token) {
        return jwt.verify(token, config.JWT_SECRET, {
          algorithms: ['HS256'],
        })
      },
      parseBasicToken(token) {
        return Buffer
          .from(token, 'base64')  
      }    
}

module.exports = AuthService