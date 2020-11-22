/**
 * Validate incoming fields
 * @package express-validator
 */

const { check } = require('express-validator');

const insertRequestValidator = [
    check('email', 'Email no válido').isEmail().not().isEmpty(),
    check('name', 'El nombre es obligatorio').not().isEmpty().matches(/^[a-zA-Z]+(\s[a-zA-Z]*)*$/).isLength({max: 50}),
    check('surnames', 'Introduzca apellidos validos').matches(/^[a-zA-Z]+(\s[a-zA-Z]*)*$/).isLength({max: 50}),
    check('phone', 'Teléfono no válido').isMobilePhone(['es-ES']),
    check('birthDate', 'La fecha introducida no es valida').isDate(),
]

module.exports = {
    insertRequestValidator
}

