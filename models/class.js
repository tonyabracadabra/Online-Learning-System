var mongoose = require('mongoose');

// class schema
var classSchema = mongoose.Schema({
	title: {
		type: String
	}, 
	description: {
		type: String
	},
	instructor: {
		type: String
	},
	lesson:[{
		lesson_number: {type: Number},
		lesson_title: {type: String},
		lesson_body: {type: String },
	}]
});

var Class = module.exports = mongoose.model('Class', ClassSchema);

// Fetch all classes
module.exports.getClasses = function(callback, limit) {
	// class is the mongoose model 
	Class.find(callback).limit(limit);
}

module.exports.getClassById = function(id, callback) {
	Class.findById(id, callback);
}