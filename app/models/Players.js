// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a Schema
var playerSchema = new Schema({
	name : {type : String, index : true},
	position : String,
	number : Number
});

// create a model
var Player = mongoose.model('Player', playerSchema);
Player.create(function (err){
	if (err) throw err;
})

exports.getPlayers = function(cb) { 
	Player.find({}, function(err,users) {
		if (err) return cb(err);
		cb(null,users);
	})
}