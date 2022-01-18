const {sign, verify}=require('jsonwebtoken');
const KEY = 'V8_EnGiNe';

let signToken = (pass)=>{
    return sign(pass, KEY)
}
let verifyToken = (pass)=>{
    return verify(pass, KEY)
}
module.exports ={
    verifyToken, 
    signToken
}