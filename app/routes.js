var players = require('./models/Players')

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get("/api/players", function(req,res) {
		res.send(players.getPlayers(function(err) {
			if (err) {
				return err;
			}
		}));
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

}