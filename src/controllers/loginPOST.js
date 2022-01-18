const express = require('express');
const router = express.Router();
const fileSystem = require('../utils/fileSystem');
const data =new fileSystem('/users.json');
const{signToken} =require('../utils/jwt')
router.post('/login', (req, res)=>{
    let {name, password} = req.body;
    const found = data.read().find(e=>e.name==name&&e.password==password);
    console.log('foun!')
    res.status(200).send({
        status:200, 
        token:signToken(found.id)
    })
})

module.exports = router;