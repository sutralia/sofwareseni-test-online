const express = require('express') ;
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const userRouter=  require('./Routes/userRouter.js');
const app = express();
const port = process.env.PORT || 5656;
// Connecting to the database
const db = mongoose.connect('mongodb://localhost:27017/softwarseni');

// setting body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/api/v1/famous-people', userRouter);

// Running the server
app.listen(port, () => {
	console.log(`http://localhost:${port}`)
})
