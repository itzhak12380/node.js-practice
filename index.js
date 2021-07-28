const dotenv = require('dotenv');
const testRouter = require('./src/Router/myRouting')
dotenv.config();
const fs = require('fs')
const bodyParser = require('body-parser');
const PORT = process.env.PORT
const express = require('express')
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/test',testRouter)

app.get('/index', (req, res) => {
    res.sendFile('./index.html', { root: __dirname })
})

//   connection.connect();


app.listen(PORT, () => {
    console.log(`server is up on port:${PORT}`);
})
