module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get("/api/players", function(req,res) {
		require("./models/Players.js").get(function(err, doc) {
			/*if (err){
				console.log("FAILED TO GET PLAYERS");
				res.sendStatus(500);
			}
			else {
				console.log(doc)
				res.sendStatus(200).json(doc)
			}
		})*/
			res.json([{name:"Bill"}])
		});
	});


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
