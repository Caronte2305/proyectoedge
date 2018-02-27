'use strict';

const path = require('path')

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "sqlite",
    storage: path.resolve(__dirname, '..', 'dev.sqlite'),
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "sqlite",
    storage: path.resolve(__dirname, '..', 'test.sqlite'),
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    storage: path.resolve(__dirname, '..', 'prod.sqlite'),
    dialect: "sqlite"
  }
}
