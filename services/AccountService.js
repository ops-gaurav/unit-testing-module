// var User = require ('../models/UsersModel');

module.exports = {
	authenticate: (req, res, next) => {
		
		res.send ({authenticated: true});
	}
};