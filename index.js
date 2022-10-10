const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectToDatabase = require('./database')
const port = 4000

const app = express()
app.use(cors({
    origin: '*'
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())

connectToDatabase()

app.listen(process.env.PORT || port, () => {
    console.log(`Iniciado na porta ${port}`)
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get("/", (req, res) => res.send("Running"))