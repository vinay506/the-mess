app.post('/login', function(req, res) {
    console.log("in post login");
    validateUser(req, res);
});

app.get('/getUsers', function(req, res) {
    console.log("in in test get");
    getUsersList(req, res);
})

function validateUser(req, res) {
    getConnection(req, res, function(connection) {
        if (req.body && req.body.params) {
            var params = req.body.params;
            var query = "select * from authtable where username=" + appendQuotes(params.username) + "AND password=" + appendQuotes(params.password);
            searchForUser(query, connection, params, res);
        }

    })
}

function appendQuotes(value) {
    return "'" + value + "'";
}

function searchForUser(query, connection, params, res) {
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
    getConnection(req, res, function(connection) {
        connection.query("select * from authtable", function(err, rows) {
            connection.release();
            if (!err) {
                res.json(rows);
            }
        });
    })
}