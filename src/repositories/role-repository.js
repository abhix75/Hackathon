const CrudRepository = require('./crud-repository');

const {role} = require('../models/role');

class RoleRepository extends CrudRepository {

    constructor(){
        super(role);
    }
    async getRoleByName(name) {
        const role = await role.findOne({where: { name: name}});
        return role;
    }

}

module.exports = RoleRepository;