const express = require('express')
const app = express()
var path = require("path");
const port = process.env.port || 3000;

//app.get('/', (req, res) => res.send('Hello World!'))
//app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root


app.use(express.static('public'))

app.listen(port, () => console.log('Example app listening on port 80!'))