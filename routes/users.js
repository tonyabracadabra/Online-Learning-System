var express = require('express');
var router = express.Router();

// user register
router.get('/register', function(req, res, next) {
	res.render('users/register');
});

module.exports = router;
