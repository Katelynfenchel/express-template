var express = require('express');
var path = require('path')
var app = express();
//http is already part of node
var server = require('http').createServer(app);
// var handlebars = require("express-handlebars");

//create a path to public
app.use(express.static(path.join(__dirname, 'public')));

//telling express that our views are in ./views
app.set('views', path.join(__dirname, 'views'));
//setting up handlebars

//using handlebars as our template/view engine, the template is going to be called main
app.set('view engine', 'hbs');

app.get('/', function(request, response){
	response.render('home', {name: "Katelyn", notLoggedIn: true, friends: ['Mike', 'Tom', 'Harry']});
})




server.listen(3000, function(){
	console.log('the server is listening on port 3000')
} )
