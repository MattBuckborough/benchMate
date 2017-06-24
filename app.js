if (!process.env.PASS_HASH) {
    console.log("*** PASS_HASH Environment variable not set.")
    return;
}

// modules =================================================
var express         = require('express');
var session         = require('express-session'); 
var app             = express();
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url); // connect to our mongoDB database 

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

/********AUTHENICATION*******/
app.use(session({secret: 'MY_SECRET'}))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
var sess;
app.get('/', function(req,res) {
    sess=req.session;
    if(sess.email)  { //logged in
        res.redirect('/dashboard')    
    } else { //not logged in
        res.render('login')
    }
});

app.post('/login', function(req, res) {
    var testUsers = [{name:"tester", pass: -1014020185}]
    sess = req.session;
    // Authenticate
    var success = false;
    var pass = req.body.pass + '' + process.env.PASS_HASH;
    var hash = 0;
    //hash function (salted with process.env.PASS_HASH)
    for (var i = 0; i < pass.length; i++) {
        hash = ((hash << 5) - hash) + pass.charCodeAt(i);
        hash |= 0;
    }
    success = require('./app/models/Users').authenticate({name: req.body.email, hash: hash});
    
    if (success == true) {
        sess.email=req.body.email;
        res.end('done');
    } else {
        res.end('err');
    }
});

app.get('/logout', function(req,res) {
    req.session.destroy(function(err){
        if (err) {
            console.log(err);
        } else {
            res.render('login');
        }
    });
});
/*******END_AUTH********/

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Listening to port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app