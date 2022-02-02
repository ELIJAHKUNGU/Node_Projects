const express = require("express")
const app = express()
const mysql = require("mysql2/promise")
require("dotenv").config()
const bcrypt = require("bcrypt")

const port = process.env.PORT
app.listen(port,
    () => console.log(`Server Started on port ${port}...`))

const db = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST, //This is your localhost IP
    user: process.env.DB_USER, // "newuser" created in Step 1(e)
    password: process.env.DB_PASSWORD, // password for the new user
    database: process.env.DB_DATABASE, // Database name
    port: process.env.DB_PORT // port name, "3306" by default
})
db.getConnection((err, connection) => {
    if (err) throw (err)
    console.log("DB connected successful: " + connection.threadId)
})



app.use(express.json())
    //middleware to read req.body.<params>
    //CREATE USER
app.post("/", async(req, res) => {
        const user = req.body.name;
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        db.getConnection(async(err, connection) => {
                if (err) throw (err)
                const sqlSearch = "SELECT * FROM userDb WHERE user = ?"
                const search_query = mysql.format(sqlSearch, [user])
                const sqlInsert = "INSERT INTO userDb VALUES (0,?,?)"
                const insert_query = mysql.format(sqlInsert, [user, hashedPassword])
                    // ? will be replaced by values
                    // ?? will be replaced by string
                await connection.query(search_query, async(err, result) => {
                        if (err) throw (err)
                        console.log("------> Search Results")
                        console.log(result.length)
                        if (result.length != 0) {
                            connection.release()
                            console.log("------> User already exists")
                            res.sendStatus(409)
                        } else {
                            await connection.query(insert_query, (err, result) => {
                                connection.release()
                                if (err) throw (err)
                                console.log("--------> Created new User")
                                console.log(result.insertId)
                                res.sendStatus(201)
                            })
                        }
                    }) //end of connection.query()
            }) //end of db.getConnection()
    }) //end of app.post()


app.listen(2000, () => {
    console.log(`Server is running on port ${2000}`)
})