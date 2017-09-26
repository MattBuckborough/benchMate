var users = require('./models/Users');
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