var express = require('express'),
    router = express.Router(),
    db = require('./db.js');


router.get('/messDetails', function(req, res) {
    console.log("in get messDetails");
});

router.post('/addDetails', function(req, res) {
    console.log("in post messDetails");
    addDetails(req, res);
});

function addDetails(req, res) {
    var params;
    if (req.body && req.body.params) {
        params = req.body.params;
    }
    if (params && params.length > 0) {
        var tableName = 'messDetails';
        db.getColumns(req, res, tableName, function(rows) {
            insertDetails(params, req, res, db.prepareQuery(params, rows, tableName));
        })
    } else {
        res.json([]);
    }
}


function insertDetails(params, req, res, query) {
    console.log("query :::", query);
    db.getConnection(req, res, function(connection) {
        connection.query(query, function(err, rows) {
            connection.release();
            if (!err) {
                res.json(rows);
            } else {
                console.log("Error in insert details");
                res.status(500).send({ error: 'Something failed!' })
            }
        });
    })
}
module.exports = router;