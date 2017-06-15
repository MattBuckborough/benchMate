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

exports.getPlayers = function() { 
	console.log("Tick")
	Player.find({}, function(err,users) {
		console.log("Tock")
		if (err) throw err;
	})

	var testPlayers = [{
			name: "Jon",
			position: "Defence",
			number: 32
		},{
			name: "Wayne",
			position: "Goalie",
			number: 1
		}]
	return testPlayers;
}