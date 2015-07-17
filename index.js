var express = require('express');
var app = express();

app.set('view engine', 'ejs');

// app.get('/', function(req, res) {
// 	res.send('Hello, world!');
// });

// app.get('/hello', function(req, res) {
// 	res.send('Hello, Person!');
// });

// app.get('/hello/:name', function(req, res) {
// 	var name = req.params.name;
// 	res.send('Hello, ' + name);
// });


app.get('/', function(req, res) {
	res.render('index');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.get('/hello/:name', function(req, res) {
	var name = req.params.name;
	res.render("hello", {name: name});
})

app.listen(3000);
