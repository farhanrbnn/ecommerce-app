// import package
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')
const app  = express()

dotenv.config()

// define vue app url 
let corsOption = {
	origin: 'http://localhost:8080'
}

// import module
const getRoute = require('./routes/get')
const postRoute = require('./routes/post')
const authRoute = require('./routes/auth')
const testRoute = require('./routes/testPrivateRoute')

// middleware
app.use(cors(corsOption))
app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))

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
app.get('/api/v1', (req,res)=>{
	return res.status(200).send("OK")
})
app.use('/api/v1', getRoute)
app.use('/api/v1', postRoute)
app.use('/api/v1', authRoute)
app.use('/api/v1', testRoute)

// serving at port 5000
app.listen(5000, ()=>{
	console.log('server listening')
})