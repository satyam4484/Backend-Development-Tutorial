async function dummyMiddleware(req,res,next) {
    console.log("inside the middleware");
    const user = {
        name:"satyam",
        id:"1"
    }
    req.user = [user];
    // next();
}

async function dummyMiddleware2(req,res,next) {
    console.log("inside the middleware  2");
    const user = {
        name:"Shivam",
        id:"2"
    }
    req.user = [...req.user,user];
    next();
}




async function getUser (req,res) {
    try{
        console.log("inside use---",req.user)
        res.status(200).send({Message:"Hello from user",user:req.user});
    }catch(error){
        res.status(400).send({message:"Error occured in getting user"});
    }
}

module.exports = {
    getUser,
    dummyMiddleware,
    dummyMiddleware2
}