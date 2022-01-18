const fileSystem = require('../utils/fileSystem');
const express = require('express');
const router = express.Router();
const wheather =new fileSystem('data.json');
const auth= require('../middlewares/Auth');

router.use(auth)
router.get('/:city/:token', (req, res)=>{
    const{city, token} =req.params
    let data = wheather.read()
    if(city&&token){
        res.status(200).send(data.find(e=>e.city==city))
    }else if(token){
        let info =data.map(e=>{
            return {
            city:e.city,
            degree: e.degree
        }
        })
        res.status(200).send(info)
    }
    
})
module.exports=router;