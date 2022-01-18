const express = require('express');
const router = express();
const {signToken, verifyToken} =require('../utils/jwt');
const fileSystem = require('../utils/fileSystem')
const KEY = 'V8_EnGiNe';
let users =new fileSystem('/users.json')
router.get('/:city/:token', (req, res, next)=>{
  try{  const {city, token} = req.params;
    console.log(city, token)
    const data =users.read();
    const found = data.find(e=>e.name==req.body.name&& e.password==req.body.password);
    console.log(found);
    id=verifyToken(token);
    console.log(id)
    found&&id?next():res.send('topilmadi')}
    catch(err){
        res.status(401).send('Unaouthorized!')
    }
    
})

module.exports=router