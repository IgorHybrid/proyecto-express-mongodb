/**
 * Routers for request types
 */

const express = require('express');
const router = express.Router();

const typeController = require(process.cwd() + '/server/controllers/type');

const getAll = async (req, res, next) => {
    try {
        res.json(await typeController.getAll());
    } catch (error) {
        next(error);
    }
}

const getById = async (req, res, next) => {
    try {
        const id = req.params.id;
        res.json(await typeController.getOne({id: id}));
    } catch (error) {
        next(error);
    }
}



router.get('/getAll', getAll);
router.get('/get/:id', getById);

module.exports = router;
