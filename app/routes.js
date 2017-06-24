var players = require('./models/Players');
var path = require('path');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get("/api/players/getPlayers", function(req,res) {
		players.getPlayers(function(err, data) {
			if (err) {
				return err;
			} else {
				res.send(data);
			}
		});
	});

	app.put("/api/players/addPlayer/", function(req,res) {
		players.addPlayer(req.body.name, req.body.position, req.body.num, function(err, data) {
			if (err) {
				return err;
			} else {
				
			}
		});
	});

	app.post("/api/players/deletePlayer/:id" , function(req,res) {
		players.deletePlayer(req.params.id, function(err, data) {
			if (err) {
				return err;
			} else {
				
			}
		});
	});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		if (req.session.email) {
			res.sendFile(path.resolve(__dirname + '/../public/index.html'));
		} else {
			res.render('login')
		}
	});
	
}