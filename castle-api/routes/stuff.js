const express = require('express')
const router = express.Router()


const stuffCtrl = require('../controllers/stuff')

router.post('/',stuffCtrl.createOrder);  // before: auth, multer 
router.get('/', stuffCtrl.getOrder); 
router.get('/:id', stuffCtrl.getOneOrder); 

//-------
module.exports = router
