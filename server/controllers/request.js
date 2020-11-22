/**
 * Request controller
 */

const Request = require(process.cwd() + '/server/models/request');

const getAll = async () => {
   return await Request.find();
}

const create = async(params) => {
    const sameRequest = await Request.find({email: params.email, createdDate:{$gt:new Date(Date.now() - 24*60*60 * 1000)}});
    if (sameRequest.length > 0) {
        let e = new Error();
        e.name = 'FormValidationError';
        e.message = [{msg: "No se pueden hacer más de una petición por día"}];
        throw e;
    }

    let request = new Request();

    request.name = params.name;
    request.email = params.email;
    request.message = params.message;
    request._type = params.type;
    request._subtype = params.subtype;

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