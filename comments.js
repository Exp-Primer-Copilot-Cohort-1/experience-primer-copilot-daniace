// Create web server
// Run: node coments.js
// Open browser: http://localhost:3000/
// Create database: use test
// Create collection: db.createCollection('coments')
// Insert data: db.coments.insert({name: 'John', coments: 'Hello World'})
// Show data: db.coments.find()
// Show data in JSON: db.coments.find().pretty()
// Show data in JSON: db.coments.find({}, {name: true, coments: true, _id: false}).pretty()
// Show data in JSON: db.coments.find({name: 'John'}, {name: true, coments: true, _id: false}).pretty()
// Update data: db.coments.update({name: 'John'}, {$set: {coments: 'Hello World 2'}})
// Delete data: db.coments.remove({name: 'John'})
// Delete data: db.coments.remove({name: 'John'}, 1)
// Delete collection: db.coments.drop()

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('test', ['coments']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/coments', function(req, res) {
	console.log('I received a GET request');

	db.coments.find(function(err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/coments', function(req, res) {
	console.log(req.body);
	db.coments.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.delete('/coments/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.coments.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/coments/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.coments.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.put('/coments/:id', function(req, res) {
	var id = req.params.id;
	console.log(req.body.name);
	db.coments.findAndModify({
		query: {_id: mongojs.ObjectId(id)},
		update: {$set


