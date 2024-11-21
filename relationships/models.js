const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    profile:{
        type: Schema.Types.ObjectId,
        ref:'Profile',
        require:true,
        unique: true
    }
});

const profileSchema = new Schema({
    contact:{
        type: String,
        require:true
    },
    age:{
        type: Number,
        require:true
    }
},{versionKey: false});


const User = model('User', userSchema);
const Profile = model('Profile',profileSchema);


module.exports = {
    User,
    Profile
}