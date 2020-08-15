const express = require('express')
const router = express.Router()
const user = require('../models/user')



router.route('/')
    .post((req,res) => {
        const obj = new user({
            name: req.body.name,
            email: req.body.email
        })

        obj.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
        
    })
    .get((req,res) => {
        res.send("Can not get GET")
    })


module.exports = router;