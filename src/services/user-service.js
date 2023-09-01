const {StatusCodes}=require("http-status-codes")
const { RoleRepository, EmployeeRepository} = require('../repositories');
const AppError = require('../utils/error/app-error');
const {Auth,Enums}=require('../utils/common');
const userRepository = new EmployeeRepository();
const roleRepository = new RoleRepository();


async function create(data)
{
    try {
        const user = await userRepository.create(data);
       const role = await roleRepository.getRoleByName(Enums.USER_ROLE_ENUMS.CUSTOMER);
        console.log(user);
        console.log(role);
        user.addRole(role);
        return user;

    } catch (error) {
          console.log(error);
        if(error.name == 'SequelizeValidationError'|| error.name == 'SequelizeUniqueConstraintError')
        {
            let explanation =[];
            console.log(error);
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        
        throw new AppError("cannot create new user object",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}



async function getUsers(id)
{
    try {
        const user = await userRepository.get(id);
        return user;
    } catch (error) {
        if(error.statusCodes==StatusCodes.NOT_FOUND)
        {
            throw new AppError("THE AEROPLANE YTHAT YOU HAVE REQUESTED IS NOT PRESENT",error.statusCodes)
        }
       throw new AppError("Not Able to get  the Airplane objects",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}
async function destroy(id)
{
    try {
        const user = await userRepository.destroy(id);
        return user;
    } catch (error) {
        if(error.statusCodes==StatusCodes.NOT_FOUND)
        {
            throw new AppError("THE AEROPLANE THAT YOU HAVE REQUESTED To DElete IS NOT PRESENT",error.statusCodes)
        }
       throw new AppError("Not Able to get  the Airplane objects",StatusCodes.INTERNAL_SERVER_ERROR); 
    }
}

module.exports={
    create,
     getUsers,
     destroy
}