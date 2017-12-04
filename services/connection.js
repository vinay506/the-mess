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


function getColumns(req, res, tableName, next) {
    var query = 'SHOW COLUMNS FROM ' + tableName
    console.log("query  : for show::", query);
    getConnection(req, res, function(connection) {
        connection.query(query, function(err, rows) {
            connection.release();
            next(rows);
        });
    });
}


function prepareQuery(params, columns, tableName) {
    var query = "insert into " + tableName;
    var select = prepareSelect(params[0]);
    var values = prepareQueryValues(params, columns);
    query = query + select + values;
    return query;
}

function prepareSelect(row) {
    var select = "";
    var keys = Object.keys(row);
    _.each(keys, function(key, index) {
        if (select == '') {
            select = select + ' ('
        }
        select = select + key;
        if (keys.length - 1 == index) {
            select = select + ')'
        } else {
            select = select + ",";
        }
    });

    return select;
}

function prepareQueryValues(rows, columns) {
    var values = "";
    _.each(rows, function(row, index) {
        if (values == '') {
            values = values + " values " + parepareValues(row, columns);
        } else {
            values = values + ',' + parepareValues(row, columns);
        }
    });
    return values;
}

function parepareValues(row, columns) {
    var record = '';
    var keys = Object.keys(row);
    _.each(keys, function(key, index) {
        if (record == '') {
            record = record + '('
        }
        record = record + appendValue(row, key, columns)

        if (keys.length - 1 == index) {
            record += ')'
        } else {
            record = record + ",";
        }

    });

    return record;
}

function appendValue(row, key, columns) {
    var record = '';
    var metaData = getMetaData(key, columns);
    if (metaData.Type.indexOf("char") != -1) {
        record = "'" + row[key] + "'";
    } else if (metaData.Type.indexOf("date") != -1) {
        record = "'" + row[key] + "'";
    } else {
        record = row[key];
    }
    return record;
}

function getMetaData(key, columns) {
    var metaData = _.findWhere(columns, { 'Field': key });
    return metaData;
}