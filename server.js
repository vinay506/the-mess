var express = require('express');
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');

var cors = require('cors');
var router = express.Router();

// Create application/x-www-form-urlencoded parser
// app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(require('./services/login'));
app.use(require('./services/messDetails'));

var server = app.listen(8080, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://localhost:", host, port)
})