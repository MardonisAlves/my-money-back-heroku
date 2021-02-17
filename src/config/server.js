const port = process.env.PORT 

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const AllowCors = require('./cors')
const queryParser = require('express-query-int')


server.use(bodyParser.urlencoded({extended : true}))
server.use(bodyParser.json())
server.use(AllowCors)
server.use(queryParser())

server.listen(port ,function() {
    console.log("BACKEND is running" , port )
})

module.exports = server

