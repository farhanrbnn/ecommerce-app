// import package
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const app  = express()

dotenv.config()

// define vue app url 
let corsOption = {
	origin: 'http://localhost:8080'
}

// import module
const { dbUrl } = require('./config/db')
const getRoute = require('./routes/get')
const postRoute = require('./routes/post')
const authRoute = require('./routes/auth')
const testRoute = require('./routes/testPrivateRoute')

app.use(cors(corsOption))
app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))

// db connection
mongoose.connect(process.env.DB_CONNECT, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => {
	console.log('dbconnected',)
})
.catch((err)=>{
	console.log(err)
})

// routing
app.use('/', getRoute)
app.use('/post', postRoute)
app.use('/user', authRoute)
app.use('/test', testRoute)

// serving at port 5000
app.listen(5000, ()=>{
	console.log('server listening')
})