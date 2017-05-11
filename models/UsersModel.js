var Sequelize = require ('sequelize');
var sequelize = require ('../db');

var UserModel = {};

/**
 * the user schemaq	
 */
var User = sequelize.define ({
	id: { type: Sequelize.STRING, unique: true, autoIncrement: true },
	name: Sequelize.STRING,
	password: Sequelize.STRING
});

/**
 * serialize the sent data
 */
UserModel.create = ( userData ) => {
	sequelize.sync().then (() => {
		return User.create ({
			name: userData.name,
			password: userData.password
		});
	});
}


module.exports = UserModel;