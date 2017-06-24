// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a Schema
var playerSchema = new Schema({
	name : {type : String, index : true},
	position : String,
	number : Number,
	stats : {g:Number,a:Number,gp:Number, PIMs: Number},
	deleted: Boolean
});

// create a model
var Player = mongoose.model('Player', playerSchema);
Player.create(function (err){
	if (err) throw err;
})


exports.getPlayers = function(cb) { 
	Player.find({deleted: {$exists: false}}, function(err,users) {
		if (err) return cb(err);
		cb(null,users);
	})
}

exports.addPlayer = function(name, pos, num){
	var player = new Player({name: name, position: pos, number: num, stats : {g:0,a:0,gp:0,PIMs:0}})
	player.save();
}

exports.deletePlayer = function(id){
	Player.update({_id: id}, {deleted: true}, function(err,users) {
		if (err) return err;
	})
}