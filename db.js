'use strict'

/**
 * Knex is an SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite and Oracle
 * check about knex here http://knexjs.org/
 */
var createKnex = require ('knex');
var Sequelize = require ('sequelize');

var sequelize = new Sequelize ('testing_db', 'root', 'gaurav2017');

// const knex = createKnex ({
// 	client: 'mysql',
// 	user: 'root',
// 	password: 'gaurav2017',
// 	connection: 'mysql://@localhost:3306/testing_db'
// });

module.exports = sequelize;