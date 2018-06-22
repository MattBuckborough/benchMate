// modules =================================================
var express         = require('express');
var session         = require('express-session'); 
var app             = express();
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var bcrypt          = require('bcrypt');


// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
mongoose.connect(db.url, {useMongoClient: true}); // connect to our mongoDB database 

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

/********AUTHENICATION*******/
app.use(session({
    secret: 'MY_SECRET',
    resave:true,
    saveUninitialized: true
}))
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
    sess = req.session;
    req.body.email = req.body.email.toLowerCase();
    // Authenticate
    var success = false;
    var pass = req.body.pass;

    require('./app/models/Users').authenticate(function(err,users) {
        if (!err) {
            for (var i = 0; i < users.length; i++) {
                if (req.body.email == users[i].email && bcrypt.compareSync(pass, users[i].hash)) {
                    console.log("*****ATTEMPTED LOGIN*****\nemail: " + req.body.email + "\nhash: " + users[i].hash + "\nstatus: SUCCESS");
                    sess.email = users[i].email;
                    res.end('done');
                    return;
                } 
            }
            console.log("*****ATTEMPTED LOGIN*****\nemail: " + req.body.email + "\nhash: " + users[i].hash + "\nstatus: FAILURE");
            res.end('err');
        } else {
            console.log("*****ATTEMPTED LOGIN*****\nemail: " + req.body.email + "\nhash: " + users[i].hash + "\nstatus: FAILURE");
            res.end('err');
        }
    });
});

app.post('/register', function(req, res) {
    sess = req.session;
    req.body.email = req.body.email.toLowerCase();
    // Authenticate
    var success = false;
    var pass = req.body.pass;
    let hash = bcrypt.hashSync(pass, 10);

    require('./app/models/Users').addUser(req.body.name, req.body.email, hash, function (err, valid) {
        if (!err && !valid) {
            require('./app/models/Users').authenticate(function(err,users) {
                if (!err) {
                    for (var i = 0; i < users.length; i++) {
                        if (req.body.email == users[i].email && bcrypt.compareSync(pass, users[i].hash)) {
                            console.log("*****ATTEMPTED Register*****\nemail: " + req.body.email + "\nhash: " + hash + "\nstatus: SUCCESS");
                            sess.email = users[i].email;
                            res.end('done');
                            return;
                        }
                    }
                    console.log("*****ATTEMPTED Register*****\nemail: " + req.body.email + "\nhash: " + hash + "\nstatus: FAILURE");
                    res.end('err');
                } else {
                    console.log("*****ATTEMPTED Register*****\nemail: " + req.body.email + "\nhash: " + hash + "\nstatus: FAILURE");
                    res.end('err');
                }
            });
        }
    })
    
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
console.log('*****Listening to port ' + port + '*****'); 			// shoutout to the user
exports = module.exports = app; 						// expose app