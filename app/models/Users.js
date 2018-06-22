// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a Schema
var userSchema = new Schema({
	email : {type : String, index : true},
	name : {type : String, index : true},
	hash : String,
	w : Number,
	l : Number,
	otl : Number,
	gp : Number,
	deleted : Boolean,
	preferences : {type : Object}
});

// create a model
var User = mongoose.model('User', userSchema);
User.create(function (err){
	if (err) throw err;
})

exports.authenticate = function (cb) {
    var status = false;
    User.find({}, function(err,users) {
		if (err) return cb(err);
        cb(null,users);
	})

}

exports.getActiveUser = function(email, cb) {
    User.find({'email' : email}, {hash:0, _id:0}, function(err,user) {
		if (err) return cb(err);
        cb(null,user[0]);
	})
}

exports.getUsers = function(cb) { 
	User.find({deleted: {$exists: false}}, function(err,users) {
		if (err) return cb(err);
		cb(null,users);
	})
}

exports.addUser = function(name, email, hash, cb){
	User.find({deleted: {$exists: false}}, function(err,users) {
		if (err) return cb(err);
		for (var i = 0; i < users.length; i++){
			if (users[i].email == email) {
				return cb(null,false)
			}
		}
		var newUser = new User({name: name, email: email, hash: hash, w: 0, l: 0, otl: 0, gp: 0, preferences: {language: "en-CA"}})
		newUser.save();
		cb(null, true);
	})
	
}

exports.delete = function(user,cb) {
	console.log("*****DELETING " + user + "*****");
	User.update({_id: user}, {
		deleted: true
	}, function (err, affected, resp) {
		return cb(err)
	});
}

exports.addWin = function(email, cb) {
	console.log("*****USER WON*****\n" + email);
	User.find({'email' : email}, {}, function(err,user) {
		User.update({_id: user[0]._id}, {
			w: user[0].w + 1, 
			gp: user[0].gp + 1, 
		}, function(err, affected, resp) {
			return cb(err);
		})
	})
}

exports.addLoss = function(email, otl, cb) {
	console.log("*****USER LOST*****\n" + email + "\nOTL: " + otl);
	if (otl == 'true' || otl != "undefined") {
		User.find({'email' : email}, {}, function(err,user) {
			User.update({_id: user[0]._id}, {
				otl: user[0].otl + 1, 
				gp: user[0].gp + 1, 
			}, function(err, affected, resp) {
				return cb(err);
			})
		})
	} else {
		User.find({'email' : email}, {}, function(err,user) {
			User.update({_id: user[0]._id}, {
				l: user[0].l + 1, 
				gp: user[0].gp + 1, 
			}, function(err, affected, resp) {
				return cb(err);
			})
		})
	}
}