/**
 * Validate incoming fields
 * @package express-validator
 */

const { check } = require('express-validator');

const insertRequestValidator = [
    check('email', 'Email no válido').isEmail().not().isEmpty(),
    check('name', 'El nombre es obligatorio').not().isEmpty().matches(/^[a-zA-Z]+(\s[a-zA-Z]*)*$/).isLength({max: 50}),
    check('surnames', 'Introduzca apellidos validos').optional().matches(/^[a-zA-Z]+(\s[a-zA-Z]*)*$/).isLength({max: 50}),
    check('phone', 'Teléfono no válido').optional().isMobilePhone(['es-ES']),
    check('birthDate', 'La fecha introducida no es valida').optional().matches(/^((0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d)|(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/)
]

module.exports = {
    insertRequestValidator
}

