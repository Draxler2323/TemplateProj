const router = require('express').Router()
const userController=require('../controllers/userController')
db= require("../config/Database")

router.post('/creer',userController.createUser)
      .post('/login',userController.logins)
 
 

module.exports  = router