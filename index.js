const express = require('express');
const mongoose = require('mongoose');
const app = express();

const {getUser,dummyMiddleware,dummyMiddleware2} = require("./middlewares/middleware")


const port = 8000;

// Middleware
app.use(express.json());

// MongoDB Connection
const mongoURI = "mongodb+srv://satyambsingh93:3DRsJtV7E19GdR0d@cluster0.dbdae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));



app.get('/',dummyMiddleware,dummyMiddleware2,getUser);




// Start the Server
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});