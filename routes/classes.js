var express = require('express');
var router = express.Router();

var Class = require('../models/class');

// classes page
router.get('/', function(req, res, next) {
	Class.getClasses(function(err, classes) {
		if (err) throw err;
		res.render('classes/index ', {classes: classes});
	}, 3);
});

// class details
router.get('/:id/details', function(req, res, next) {
	Class.getClasses(function(err, classname) {
		if (err) throw err;
		res.render('classes/details ', {classname: classname });
	}, 3);
});

module.exports = router;
 