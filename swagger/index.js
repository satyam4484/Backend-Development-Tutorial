const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json')

const app = express();


const port = 8000;


app.use(express.json());
app.use('/api-doc',swaggerUI.serve,swaggerUI.setup(swaggerFile));

// MongoDB Connection
const mongoURI = "mongodb+srv://satyambsingh93:3DRsJtV7E19GdR0d@cluster0.dbdae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));


const users = [
    {id:1,name:'satyam'},
    {id:2,name:'shivam'},
    {id:3,name:'shubham'}
];

// GET  /api/users
app.get('/api/users',(req,res) =>{
    // #swagger.tags = ['Users']
    try{
        res.send(users);
    }catch(error) {
        console.log("error",error);
        res.send({Message:"Error in getting users"})
    }
})

// POST  /api/users
app.post('/api/users',(req,res) =>{
    // #swagger.tags = ['profile']
    // #swagger.description = 'It will add new user and return the updated list'
    try{
        const {name} = req.body;
        users.push({id:users.length+1,name});
        res.status(201).send({Messsage:'User addedd',users});

    }catch(error) {
        console.log("error",error);
        res.status(400).send({Message:"Error in getting users"})
    }
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});