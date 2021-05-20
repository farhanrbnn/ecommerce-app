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

const port = process.env.PORT || 5000

// import module
const getRoute = require('./routes/get')
const postRoute = require('./routes/post')
const authRoute = require('./routes/auth')

// middleware
app.use(cors())
app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))
app.use(cookieParser())
app.use(morgan('dev'))

// db connection
mongoose.connect(process.env.DB_CONNECT, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false 
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

app.get('*', function(req, res){
	res.status(404).json({
		'status':404,
		'message': 'Not Found'
	});
  });

// serving at port 5000
app.listen(port, ()=>{
	console.log('server listening', port)
})