const {Schema,model} = require("mongoose");


// category
const categorySchema = new Schema({
    name:{
        type: String
    }
});

// userschema

const userSchema = new Schema({
    name:{
        type: String
    }
});


const subCategorySchema = new Schema({
    name:{
        type: String
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        require:true
    }
});


const articleSchema = new Schema({
    name:{
        type: String
    },
    description:{
        type: String
    },
    user:{
        type:Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    sub_category:{
        type: Schema.Types.ObjectId,
        ref:'Subcategory',
        require: true
    }
});


const Category = model('Category',categorySchema);
const User = model('User',userSchema);
const Subcategory = model('Subcategory',subCategorySchema);
const Article = model('Article',articleSchema);

module.exports = {
    Category,
    User,
    Subcategory,
    Article
}