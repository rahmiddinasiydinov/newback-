const express= require('express');
const router = express.Router();
const homeGET = require('./controllers/homeGET')
const userAddPOST = require('./controllers/userAddPOST');
const loginPOST = require('./controllers/loginPOST')

router.use(homeGET);
router.use(userAddPOST);
router.use(loginPOST);


module.exports = router;