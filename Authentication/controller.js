const User = require("./model");
const bcrypt = require("bcryptjs");
const { json } = require("express");
const jwt = require("jsonwebtoken");

async function verifyToken (req,res) {
    try{
        const header = req.headers['authorization'];
        if(typeof header === 'undefined') {
            throw new Error("Invalid header ||| token required");
        }

        const token = header.split(" ")[1];
        const isVerified = jwt.verify(token,"nodejsauthentication");
        if(!isVerified) {
            throw new Error("Invalid token or token expired....");
        }

        console.log("token is verified");
        return {error:false,data:isVerified};

    }catch(error) {
        console.log("erroor",error);
        return {error:true};
    }
}

const userLogin = async (req,res) => {
    try{
        const {email,password} = req.body;
        // get user by email
        const user = await User.findOne({email:email});
        if(!user) {
            throw new Error("Email Does not exist");
        }
        // verify his password
        if(!await bcrypt.compare(password,user.password)) {
            throw new Error("Password Does not match....");
        }

        // generate token and send the token
        const token = jwt.sign(JSON.stringify(user),"nodejsauthentication");

        res.status(200).send({Message:"User logged in successfullyy....",token});

    }catch(error) {
        console.log("error=====",error);
        res.status(500).send({Message:"User login failed....",error});
    }
}

const getUser = async (req,res) => {
    try{
        const {data} = await verifyToken(req,res);

        res.status(201).send({Message:"User details retrived,.....",user:{name:data.name,email:data.email,_id:data._id}});

    }catch(error) {
        console.log("error----",error)
        res.status(500).send({Message:"Getting user details failed....."});
    }
}

const Signup = async(req,res) => {
    try{
        const body = req.body;
        const newUser =await User.create(body);
        // const newUser = new User(body);
        // newUser.save()
        res.status(201).send({Message:"User creatd Sucessfullyy......"});

    }catch(error) {
        console.log("error----",error)
        res.status(500).send({Message:"User creation failed"});
    }
}


module.exports = {Signup,userLogin,getUser};