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

exports.authenticate = function (user,cb) {
    var status = false;
    User.find({}, function(err,users) {
		if (err) return cb(err);
        //console.log(users)
        cb(null,users);
	})

}