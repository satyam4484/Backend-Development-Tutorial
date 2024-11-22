// ONE-TO-ONE
const {User, Profile} = require('./models');

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
