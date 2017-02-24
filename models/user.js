var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
	username: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String,
		bcrypt: true
	},
	type: {
		type: String
	}
});

var User = module.exports = mongoose.model('User', userSchema);

// Get Single User
module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}

// Get Single User
module.exports.getUserByName = function(username, callback) {
	var query = {username: username};
	User.findOne(query, callback);
}

// Create Studenht user
module.exports.saveStudent = function(newUser, newStudent, callback) {
	bcrypt.hash(newUser.password, 10, function(err, hash) {
		if (err) throw err;
		newUser.password = hash;
		console.log('Student is being saved');
		async.parallel([newUser.save, newStudent.save], callback);
	});
}

// Create Studenht user
module.exports.saveInstructor = function(newUser, newInstructor , callback) {
	bcrypt.hash(newUser.password, 10, function(err, hash) {
		if (err) throw err;
		newUser.password = hash;
		console.log(' Instructor is being saved');
		async.parallel([newUser.save, newInstructor.save], callback);
	});
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
		if (err) throw err;
		callback(null, isMatch);
	});
}