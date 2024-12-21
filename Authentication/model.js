const { Schema, model }  = require("mongoose");
const bcrypt = require("bcryptjs");



const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true
    }
});

userSchema.pre("save",async function(next){
    try{
        if(this.isModified("password")) {
            this.password = await bcrypt.hash(this.password,10);
        }
        next();
    }catch(error){
        next(error);
    }
})


const User = model("User",userSchema);

module.exports = User;