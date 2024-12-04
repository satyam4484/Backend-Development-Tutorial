const express = require('express');
const mongoose = require('mongoose');
const app = express();

// const {add_user, add_article, get_articles} = require("./one_to_many");
const controller = require("./doubts_session/controller");




const port = 8000;

// Middleware
app.use(express.json());

// MongoDB Connection
const mongoURI = "mongodb+srv://satyambsingh93:3DRsJtV7E19GdR0d@cluster0.dbdae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoURI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));



// doubts session
app.get('/category',controller.getCategory);
app.post('/category',controller.addCategory);

app.get('/subcategory',controller.getSubCategories);
app.post('/subcategory',controller.addSubCategory);

app.get('/user',controller.getUser);
app.post('/user',controller.addUser);


app.get('/articles',controller.getArticles);
app.post('/articles',controller.addArticle);









// // Note: Many_to_Many

// app.post('/add-student',add_student);
// app.get('/get-student',get_students);
// app.post('/add-courses',add_course);
// app.post('/enroll-courses',enroll_course);


// Note: one_to_many

// app.post('/add-user',add_user);
// app.post('/add-article',add_article);
// app.get('/add-article',get_articles);
// app.get('/add-article/:userId',get_articles);







// Start the Server
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
