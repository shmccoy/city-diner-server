module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    API_TOKEN: process.env.API_TOKEN || 0000,
    DB_URL: process.env.DB_URL || 'postgresql://postgres:100680@localhost/menu',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres:100680@localhost/menu-test'
    JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
    
  }