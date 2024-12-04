const {User,Category, Subcategory, Article} = require("./models");

const addUser = async (req, res) => {
    try{
        const data = req.body;
        const newUser = await User.create(data);
        res.status(201).send({Message:'User addedd...',user:newUser});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while addding User.....'});
    }
}

const getUser = async (req, res) => {
    try{
        const users = await User.find();
        res.status(201).send({Message:'User data...',users});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while getting User.....'});
    }
}


// category
const addCategory = async (req, res) => {
    try{
        const data = req.body;
        const newCategory = await Category.create(data);
        res.status(201).send({Message:'Category addedd...',Category:newCategory});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while addding Category.....'});
    }
}

const getCategory = async (req, res) => {
    try{
        const categories = await Category.find();
        res.status(201).send({Message:'categories data...',categories});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while getting categories.....'});
    }
}

// subcategory

const addSubCategory = async (req, res) => {
    try{
        const data = req.body;
        const newSubCategory = await Subcategory.create(data);
        res.status(201).send({Message:'newSubCategory addedd...',Subcategory:newSubCategory});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while addding newSubCategory.....'});
    }
}

const getSubCategories= async (req, res) => {
    try{
        const subcategories = await Subcategory.find().populate('category');
        res.status(201).send({Message:'categories data...',subcategories});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while getting categories.....'});
    }
}

// article
const addArticle = async (req, res) => {
    try{
        const data = req.body;
        const newArticle = await Article.create(data);
        res.status(201).send({Message:'newArticle addedd...',article:newArticle});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while addding newArticle.....'});
    }
}

const getArticles= async (req, res) => {
    try{
        // const articles = await Article.find().populate("user").populate({
        //     path:"sub_category",
        //     populate:"category"
        // });
        const articles = await Article.find().populate([
            {path:'user',select:'-_id'},
            {path:'sub_category',select:'-category'}
        ])
        res.status(201).send({Message:'artilces data...',articles});
    }catch(error) {
        console.log("error-",error);
        res.status(400).send({Messgae:'Error Orccured while getting articles.....'});
    }
}


module.exports = {
    addCategory,
    getCategory,
    addUser,
    getUser,
    addSubCategory,
    getSubCategories,
    addArticle,
    getArticles
}