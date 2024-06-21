const express = require("express");
const app  = express();

app.use(express.json())

let users = [
    {id:1,name:"akmal",contact:"91322222",gender:"M"},
    {id:2,name:"manju",contact:"9144929222",gender:"F"},
]

app.get('/user',(req,res) => {
    res.status(200).send({Message:"Data Retrived",users})
});


app.get('/user/:id',(req,res) => {
    let id = req.params.id; // strinf
    // console.log("id--",id)
    const index = users.findIndex(user => user.id === parseInt(id));
    if(index !== -1) {
        res.status(200).send({Message:"User data",user:users[index]});
    }else{
        res.status(404).send({Message:"User data not found"});
    }
});

app.post('/user',(req,res) => {
    const data = req.body;
    const user = {
        id:users.length + 1,
        ...data
    }
    users.push(user);
    res.status(201).send({Message:"User Added"});
});

app.patch('/user/:id',(req,res)=> {
    let id = req.params.id;
    const data = req.body;
    const index = users.findIndex(user => user.id === parseInt(id));

    if(index !== -1) {
        // update
        users[index].name = data.name;
        users[index].contact = data.contact;
        users[index].gender = data.gender;

        res.status(201).send({Message:"User data updated",user:users[index]})
    }else{
        res.status(404).send({Message:"User Not found"});
    }
});

app.delete('/user/:id',(req,res) => {
    let id = req.params.id;
    const index = users.findIndex(user => user.id === parseInt(id));
    
    if(index !== -1) {
        users = users.filter(user => user.id !== parseInt(id));

        res.status(200).send({Message:"User data Deleted"})
    }else{
        res.status(404).send({Message:"User Not found"});
    }
})


// main
// get all
// get -- all items
// get by id 
// add data 
// update 
// delete 





app.listen(8000,() => {
    console.log("Server started at port 8000");
})