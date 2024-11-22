const {Schema, model} = require('mongoose');


const userSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
});


const articleSchema = new Schema({
    name:{
        type: String
    },
    created_at:{
        type:Date,
        default:Date.now()
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
});


const User = model('User',userSchema);
const Article = model('Article',articleSchema);





const add_user = async (req,res) => {
    try{
        const data = req.body;
        const newUser = await User.create(data);
        res.status(201).send({Message:'User addedd....',user:newUser});

    }catch(error) {
        console.log("error--",error);
        res.status(400).send({Messgae:"Error occured in creating user"});
    }
}


const add_article = async (req,res) => {
    try{
        const data = req.body;
        const newArticle = await Article.create(data);
        res.status(201).send({Message:'Article addedd....',article:newArticle});

    }catch(error) {
        console.log("error--",error);
        res.status(400).send({Messgae:"Error occured in Adding Article"});
    }
}

const get_articles = async (req,res) => {
    try{
        let articles = [];
        if(req.params.userId !== undefined) {
            articles = await Article.find({user:req.params.userId }).populate("user");
        }else{
            articles = await Article.find().populate("user");
        }
        
        res.status(200).send({Messgae:'Articles fetch...',articles});

    }catch(error) {
        console.log("error--",error);
        res.status(400).send({Messgae:"Error occured in Getting Article"});
    }
}


module.exports = {
    add_user,
    add_article,
    get_articles
}