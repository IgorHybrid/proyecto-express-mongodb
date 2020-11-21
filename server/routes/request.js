/**
 * Routers for request
 */

const express = require('express');
const router = express.Router();

const requestController = require(process.cwd() + '/server/controllers/request');

const getAll = async (req, res, next) => {
    try {
        res.json(await requestController.getAll());
    } catch (error) {
        next(error);
    }
}

const insert = async (req, res, next) => {
    try {
        res.json(await requestController.create(req.body));
    } catch (error) {
        next(error);
    }
}



router.get('/getAll', getAll);
router.post('/insert', insert);

module.exports = router;
