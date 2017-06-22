var players = require('./models/Players')
var path = require('path')

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get("/api/players", function(req,res) {
		players.getPlayers(function(err, data) {
			if (err) {
				return err;
			} else {
				res.send(data);
			}
		});
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendFile(path.resolve(__dirname + '/../public/index.html'));
	});
	
}