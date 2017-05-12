var router = require ('express').Router();
var controller = require ('../services/AccountService');
// const router = express.Router();

router.post ('/auth', controller.authenticate);	

module.exports = router;
