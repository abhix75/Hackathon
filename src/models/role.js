'use strict';
const {
  Model
} = require('sequelize');
const {Enums}=require('../utils/common');
const {ADMIN,CUSTOMER}=Enums.USER_ROLE_ENUMS;
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Employees, {through: 'employee_role', foreignKey: 'roleId', otherKey: 'employeeId', as: 'users'});
    }
  }
  role.init({
    name:
    {
        type:DataTypes.ENUM({
          values:[ADMIN,CUSTOMER]
        }),
        allowNull:false,
        defaultValue: CUSTOMER
    } 
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};