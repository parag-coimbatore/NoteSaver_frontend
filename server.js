const express = require('express');
const notes = require('./data/notes')
const dotenv = require('dotenv')
const connectDB = require("./config/db")
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

//If we dont want to write again the npm start, we must install nodemon
// This should already be declared in your API file
// ADD THIS
// Created an object of this imported package
const app = express();
dotenv.config();
connectDB()
app.use(express.json())

// Created a script in package.json so that we dont have to write node backend/server.js 
// just write npm start//Creating an API endpoint
//Get request get data from backend to frontend and serves it
app.get('/', (req,res)=> {
    res.send("API is running");
})

app.get('/api/notes', (req,res)=> {
    res.json(notes)
})
 
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

// Web server is created here
app.listen(PORT, console.log(`Server started at PORT {PORT}`)) 