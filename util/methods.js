// var db = require ('../db');
var UserModel = require ('../models/UsersModel');

const tableName = 'users';

module.exports = {
	printMethod: () => {
		// console.log ('this is a print method');
		return new Promise (function (resolve) {
			resolve ();
		})
	},

	createUser: () => {
		// UserModel.
		// return new Promise().then ((resolver) => resolver());
		// return db.schema.createTableIfNotExists (tableName, (table) => {
		// 	table.increments();
		// 	table.string ("name");
		// 	table.timestamps ();
		// });
	}
};