const express = require('express');
var log = require('morgan');
var controller = require('./controller');
var connection = require('./dbconnect');
var myDB = (req, res, next)=> {req.db = connection.db; req.connect = connection.connect; next();}


var app = express();


app.enable('strict routing');
app.enable('case sensitive routing');
app.set('x-powered-by', false);

app.use(log('dev'));


app.use('/secret', myDB, controller.router)


app.listen('9999', console.log('Listening port 9999...'));