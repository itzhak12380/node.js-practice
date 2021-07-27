const dotenv = require('dotenv');
const testRouter = require('./src/Router/myRouting')
dotenv.config();
const fs = require('fs')
const bodyParser = require('body-parser');
const PORT = process.env.PORT
const host = process.env.host
const user = process.env.user
const password = process.env.password
const database = process.env.database
const express = require('express')
const cors = require("cors")
const mysql = require('mysql')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/test',testRouter)

app.get('/index', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})
const connection = mysql.createPool({
    host : host,
    user : user,
    password : password,
    database : database
  })
//   connection.connect();
  connection.query(('select * from students '),(err,res)=> {
    if (err) throw err;
    console.log(res);
    res.forEach(element => {
        console.log(element);
        for (const key in element) {
            console.log(key,element[key]);
        }
    });
  });

app.listen(PORT, () => {
    console.log(`server is up on port:${PORT}`);
})
