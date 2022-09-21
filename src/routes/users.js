const express = require('express')

const router = express.Router()

router.get('/username', (req,res)=>{
    res.send('username route')
})

router.post('/profile',(req,res)=>{
    console.log(req.body)
    res.send('profile page')
})

module.exports = router