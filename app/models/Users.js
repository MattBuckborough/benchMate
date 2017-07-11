// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a Schema
var userSchema = new Schema({
	email : {type : String, index : true},
	hash : Number
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