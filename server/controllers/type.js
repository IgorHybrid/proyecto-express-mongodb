/**
 * Request type controller
 */

const Type = require(process.cwd() + '/server/models/type');
const Subtype = require(process.cwd() + '/server/models/subtype');

const getAll = async () => {
   return await Type.find();
}

const getOne = async (params) => {
    return await Type.findOne({_id: params.id}).populate({path: '_subtypes', model: Subtype});
}

module.exports = {
    getAll,
    getOne
}