const CrudRepository = require('./crud-repository');

const {Employees} = require('../models');

class EmployeeRepository extends CrudRepository {

    constructor(){
        super(Employees);
    }
}

module.exports = EmployeeRepository;