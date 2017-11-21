// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a Schema
var gameSchema = new Schema({
	createdBy : {type : String, index : true},
	winner : {type : String, index : true},
	loser : {type : String, index : true},
	w : Number,
	l : Number,
    otl : Boolean,
    ts : Date
});

// create a model
var Game = mongoose.model('Game', gameSchema);
Game.create(function (err){
	if (err) throw err;
})

exports.addGame = function(createdBy, winner, loser, w, l, otl, cb){
    if (otl == "undefined" || otl == "false") {
        otl = false;
    } else {
        otl = true;
    }
    console.log("*****New Game*****\nCreatedBy: " + createdBy + '\nWinner: ' + winner + "\nLoser: " + loser + "\nIs OTL: " + otl);    
	var newGame = new Game({createdBy: createdBy, winner: winner, loser: loser, w: w, l: l, otl: otl, ts: new Date()})
	newGame.save();
	cb(null, true);

}

