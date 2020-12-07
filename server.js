// import package
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app  = express();

// import module
const { dbUrl } = require('./config/db');
const getRoute = require('./route/get');

app.use(bodyParser.json());

// db connection
mongoose.connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => {
	console.log('dbconnected',)
})
.catch((err)=>{
	console.log(err)
});

// routing
app.use('/', getRoute);

app.listen(5000, ()=>{
	console.log('server listening');
})
