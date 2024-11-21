const express = require('express');
const mongoose = require('mongoose');
const app = express();

const {User, Profile} = require('./models');

const port = 8000;

// Middleware
app.use(express.json());

// MongoDB Connection
const mongoURI = "mongodb+srv://satyambsingh93:3DRsJtV7E19GdR0d@cluster0.dbdae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));




app.post('/add-user',async (req,res) => {
    try{
        const data = req.body;

        const newProfile = await Profile.create(data.profile);

        const newUser = await User.create({
            name:data.name,
            email:data.email,
            profile:newProfile._id
        });

        const user = await User.findById(newUser._id).populate('profile')
        res.status(201).send({Messgae:"user created",user:user});

    }catch(error) {
        console.log("error--",error);
        res.status(400).send({Messgae:'Error in add user'});
    }
})


app.post('/add-profile',async (req,res) => {
    try{
        const data = req.body;
        const newProfile = await Profile.create(data);
        res.status(201).send({Messgae:"Profile created",Profile:newProfile});

    }catch(error) {
        console.log("error--",error);
        res.status(400).send({Messgae:'Error in add Profile'});
    }
});


// Start the Server
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
