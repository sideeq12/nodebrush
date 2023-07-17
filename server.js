const express = require("express");
const req = require("express/lib/request");

const app = express();

const userRouter = require("./routes/users")
const postRouter = require("./routes/posts")

app.use(logger) 
// to read data coming from forms, we need the middleware
app.use(express.urlencoded({ extended : true}))
app.use("/users", userRouter);
app.use("/posts", postRouter)



app.get("/", (req, res)=>{
    res.json({
        hi : "message here"
    })
})



// making the logger middleware

function logger(req, res, next){
    console.log(req.originalUrl);
    next();
}

app.listen(3000 , ()=>{
    console.log("the server listening om port : 3000")
})