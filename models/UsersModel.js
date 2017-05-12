var Sequelize = require ('sequelize');
var sequelize = require ('../db');

var UserModel = {};

/**
 * the user schemaq	
 */
var User = sequelize.define ('users', {
	id: { type: Sequelize.INT, unique: true, autoIncrement: true, primaryKey: true },
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

/**
 * finding the user by id
 */
UserModel.findById = (id) => {
	User.findAll ({
		where: {
			id: id
		}
	});
}



module.exports = UserModel;