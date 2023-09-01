const { StatusCodes }= require('http-status-codes');

const { UserService} = require('../services/index');
const employees = require('../models/employees');
const { SuccessResponse, ErrorResponse } = require('../utils/common');




async function create(req,res)
{
     try {
        const user = await UserService.create({
            name: req.body.name,
            employeeId: req.body.employeeId,
            
            designation: req.body.designation,
            
            experience: req.body.experience,
            
            age: req.body.age
        });
        SuccessResponse.data = user;
        return res
                 .status(StatusCodes.CREATED)
                 .json(SuccessResponse)
    } catch (error)
     {
        ErrorResponse.error=error;
        return res
                 .status(error.statusCodes)
                 .json(ErrorResponse)
     }
 }


 async function getUser(req,res)
{
    try {
        const User = await UserService.getUsers(req.params.id);
        SuccessResponse.data=User;
        return res 
                 .status(StatusCodes.OK)
                 .json(SuccessResponse)
                 
    } catch (error) {
        ErrorResponse.error=error;
        return res 
                 .status(error.statusCodes)
                 .json(ErrorResponse)
    }
}

async function destroy(req,res)
{
    try {
        const airplane = await UserService.delete(req.params.id);
        SuccessResponse.data=airplane;
        return res 
                 .status(StatusCodes.OK)
                 .json(SuccessResponse)
                 
    } catch (error) {
        ErrorResponse.error=error;
        return res 
                 .status(error.statusCodes)
                 .json(ErrorResponse)
    }
}
async function updateUser(req,res)
{
    try {
        const response = await UserService.getUpdate(req.params.id,req.body);
        SuccessResponse.data=response;
        return res 
                 .status(StatusCodes.OK)
                 .json(SuccessResponse)
                 
    } catch (error) {
        ErrorResponse.error=error;
        return res 
                 .status(error.statusCodes)
                 .json(ErrorResponse)
    }
}



 module.exports={
    create,
    getUser,
    destroy,
    updateUser
 }