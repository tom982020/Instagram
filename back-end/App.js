const express = require('express')
const path = require('path')
require('dotenv').config()
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
require('./db')


express()
    .use(express.static(path.join(__dirname, 'node_modules')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({limit: '̀50mb', extended:true}))
    .use(bodyParser.text())
    .use(bodyParser.json({type:'application/json'}))
    .listen(PORT, ()=> console.log('listening on port ${ PORT }'))