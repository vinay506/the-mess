var express = require('express'),
    router = express.Router(),
    db = require('./db.js');

router.post('/login', function(req, res) {
    console.log("in post login");
    validateUser(req, res);
});

router.get('/getUsers', function(req, res) {
    console.log("in in test get");
    getUsersList(req, res);
})

function validateUser(req, res) {
    db.getConnection(req, res, function(connection) {
        if (req.body && req.body.params) {
            var params = req.body.params;
            var query = "SELECT userinfo.username FROM userinfo JOIN authtable ON userinfo.userId=authtable.userID WHERE userinfo.username=" + appendQuotes(params.username) + "AND authtable.password=" + appendQuotes(params.password);
            searchForUser(query, connection, res);
        }
    })
}

function appendQuotes(value) {
    return "'" + value + "'";
}

function searchForUser(query, connection, res) {
    if (!query) {
        return;
    }
    connection.query(query, function(err, rows) {
        connection.release();
        if (!err) {
            res.json(rows);
        } else {
            console.log("Error in login");
            res.status(500).send({ error: 'Something failed!' })
        }
    });

}

function getUsersList(req, res) {
    db.getConnection(req, res, function(connection) {
        connection.query("select * from userinfo", function(err, rows) {
            connection.release();
            if (!err) {
                res.json(rows);
            }
        });
    })
}

module.exports = router;