/**
 * Routers for request
 */

const express = require('express');
const router = express.Router();

const requestController = require(process.cwd() + '/server/controllers/request');
const { insertRequestValidator } = require(process.cwd() + '/server/middleware/validators')

const { validationResult } = require('express-validator');


const getAll = async (req, res, next) => {
    try {
        res.json(await requestController.getAll());
    } catch (error) {
        next(error);
    }
}

const insert = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            let e = new Error();
            e.name = 'FormValidationError';
            e.message = errors.array();
            throw e;
        }

        const createdRequest = await requestController.create(req.body);
        if (req.header('Content-Type').includes('application/json')) {
            res.json(createdRequest);
        } else {
            res.render('index.ejs', {success: true});
        }
    } catch (error) {
        next(error);
    }
}



router.get('/getAll', getAll);
router.post('/insert', insertRequestValidator, insert);

module.exports = router;
