var users = require('./models/Users');
var games = require('./models/Games');
var path = require('path');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// Get all users
	app.get("/api/user/getUsers", function(req,res) {
		users.getUsers(function(err, data) {
			if (err) {
				return err;
			} else {
				res.send(data);
			}
		});
	});

	// Get all games
	app.get("/api/games/getGames", function(req,res) {
		games.getGames(function(err, data) {
			if (err) {
				return err;
			} else {
				res.send(data);
			}
		});
	});
	
	// Get current active user information
	app.get("/api/user/getActiveUser", function(req,res) {
		users.getActiveUser(req.session.email, function(err, data) {
			if (err) {
				return err;
			} else {
				res.send(data);
			}
		});
	});

	// Delete user
	app.post("/api/user/delete/:user" , function(req,res) {
		users.delete(req.params.user, function(err, data) {
			if (err) {
				return err;
			} 
		})
	})

	// Add win
	app.post("/api/user/win/:user" , function(req,res) {
		users.addWin(req.params.user, function(err, data) {
			if (err) {
				return err;
			} 
		})
	})

	// Add loss
	app.post("/api/user/loss/:user/:otl" , function(req,res) {
		users.addLoss(req.params.user, req.params.otl, function(err, data) {
			if (err) {
				return err;
			} 
		})
	})

	// Add loss
	app.post("/api/game/addGame/:winner/:loser/:w/:l/:otl" , function(req,res) {
		games.addGame(req.session.email, req.params.winner, req.params.loser, req.params.w, req.params.l, req.params.otl, function(err, data) {
			if (err) {
				return err;
			} 
		})
	})

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