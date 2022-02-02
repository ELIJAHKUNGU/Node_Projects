var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'ELIJAH',
    password: 'elijah123',
    database: 'maraUsers'
});
connection.connect(function(err) {
    if (!err) {
        console.log("Database is connected");
    } else {
        console.log("Error while connecting with database");
    }
});
module.exports = connection;