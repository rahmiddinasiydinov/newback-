const express = require('express');
const router = express.Router();
const fileSytstem = require('../utils/fileSystem');
const users =new fileSytstem('users.json');
const {signToken, verifyToken} = require('../utils/jwt')
router.post('/newUser', (req, res)=>{
    const data = users.read();
    let newUser = {
        id:data.length, 
        name: req.body.name, 
        password : req.body.password
    }
    data.push(newUser);
    users.write(data);
    res.send({
        status:200, 
        message:'added', 
        token:signToken(data.length)
    })

})

module.exports = router