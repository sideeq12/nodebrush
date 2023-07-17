const express = require("express");
const router = express.Router();



router.get("/", (req, res)=>{
    res.send("User List")
})

router.get("/new", (req, res)=>{
    res.send("New users Form")
})

// to get specific user with id 


// to make it a readable code format
router.route("/:id")
.get( (req, res)=>{
    res.send(`Return user with id : ${req.params.id}`)
})
.put( (req, res)=>{
    res.send(`Return user with id : ${req.params.id}`)
})
.delete( (req, res)=>{
    res.send(`Return user with id : ${req.params.id}`)
})

router.param("id", (req, res, next, id)=>{
    // the right section for fetching data from the database ???

    next()
})
module.exports = router;