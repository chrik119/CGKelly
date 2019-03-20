var express = require('express');
var app = express();
var methodOverride  = require('method-override');
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var sanitizer       = require('express-sanitizer');
var port = process.env.PORT || 3000;
var dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/my_users';

////////////////
// APP CONFIG //
////////////////
app.set('view engine', 'ejs');
app.use(express.static('public'));
mongoose.connect(dbConnection, { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.use(sanitizer());
app.use(methodOverride('_method'));

//////////////
// DATABASE //
//////////////
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    created: {type: Date, default: Date.now}
});
var User = mongoose.model('User', userSchema);

////////////
// ROUTES //
////////////
app.get('/', function(req, res){
    res.render('home');
});

app.get('/users/new', function(req, res){
    res.render('signUp');
});

app.post('/users/', function(req, res){
    req.body.username = req.sanitize(req.body.username);
    req.body.password = req.sanitize(req.body.password);
    User.find({username: req.body.username}, function(err, user){
        if(err){
            console.log(err);
            res.redirect('/');
        } else if(user.length > 0) {
            console.log('Found');
            res.redirect('/users/new');
        } else {
            User.create({username: req.body.username, password: req.body.password}, function(err, user){
                console.log('Create');
                if(err){
                    res.redirect('/');
                } else {
                    res.redirect('/');
                }
            });
        }
    })
});

app.listen(port, function(){
    console.log('Server Launched On ' + port);
});