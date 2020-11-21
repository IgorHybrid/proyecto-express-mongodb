/**
 * Request controller
 */

const Request = require(process.cwd() + '/server/models/request');

const getAll = async () => {
   return await Request.find();
}

const create = async(params) => {
    let request = new Request();

    request.name = params.name;
    request.email = params.email;
    request.message = params.message;
    request._type = params._type;
    request._subtype = params._subtype;

    if (params.surnames) {
        request.surnames = params.surnames;
    }
    if (params.phone) {
        request.phones = params.phone;
    }
    if (params.birthDate) {
        request.birthDate = new Date(params.birthDate);
    }
    if (params.genre) {
        request.genre = params.genre;
    }

    return await request.save();
}

module.exports = {
    getAll,
    create
}