const express=require('express')

const userController=require('./controllers/userController')
const router=express.Router()

router.route('/').get(userController.loginController)
//router.route('./create').post(userController)

module.exports=router