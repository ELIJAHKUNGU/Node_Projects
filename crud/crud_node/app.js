const mysql = require('mysql2');
const express = require('express')
const bodyParser = ('body-parser')

app = express();
app.use(bodyParser.json());

//connection
var mysqlConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "ELIJAH",
    port: "3306",
    password: 'elijah123',
    database: "testingNode"

});
mysqlConnection.connect((err) => {
    if (err) {
        console.log("Db connection unsuccessful \n Error :" + JSON.stringify(err, undefined, 2));
    } else {
        console.log("Connection was successfully connected")
    }
})
app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
})