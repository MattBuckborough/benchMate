// grab the mongoose module
var mongoose = require('mongoose');
exports.get = function() { 
	/*db.get().collection("players").find({}, function (err, outdoc) {
		if (err) {
			return cb(err)
		} else {
			cb(null, outdoc);
			
		}
	})*/
	return [{name:"Billl"}]
}/*
	mongoose.connection.on('error', function (err) {
		console.log("Connected")
	});
	console.log("tick");
}

mongoose.connect(db.url);

var db = mongoose.connection;
console.log("tick")
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

	// define our nerd model
	// module.exports allows us to pass this to other files when it is called
	

})*/