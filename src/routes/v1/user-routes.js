const express = require('express');

const {UserController}=require('../../controllers');
const { AuthRequestMiddleWares } = require('../../middlewares');

const router = express.Router();

          router.post('/create',
                              UserController.create)

       

          router.get('/:id',
                           UserController.getUser);    

          router.delete('/:id',
                           UserController.destroy);    
                
module.exports =router; 