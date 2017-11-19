var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'db_mess',
    debug: false
});

var getConnection = function(req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }

        console.log('connected as id ' + connection.threadId);

        if (next) {
            next(connection)
        }

        connection.on('error', function(err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
};