const express = require('express');
const app = express();

const port = 8000;

app.use(express.json())
// get
// post
// put,patch
// delete

// localhost:8000

app.delete('/',(req,res)=>{
    const data = req.body;
    
    res.send({message:"data recieved",data});
})
app.patch('/',(req,res)=>{
    const data = req.body;
    
    res.send({message:"data recieved",data});
})

app.put('/',(req,res)=>{
    const data = req.body;
    
    res.send({message:"data recieved",data});
})
app.post('/',(req,res)=>{
    const data = req.body;
    
    res.send({message:"data recieved",data});
})


app.get('/', (req, res) => {
    res.send(
        { error:"everything looks good",
        name:"satyam",
        message: "Welcome to get method for express tutorial" }
    );
});



app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});