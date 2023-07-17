const express = require("express");
const router = express.Router();

router.post("/", (req, res)=>{
        res.json({
            main : "all data post"
        })
})

router.post("/data", (req, res)=>{
    res.json({
        message : "new data posted here"
    })
})

module.exports = router;

