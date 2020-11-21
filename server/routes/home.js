/**
 * Routers for home
 */

const express = require('express');
const router = express.Router();

const home = async (req, res, next) => {
    try {
        res.sendFile('index.html', {root: './views'});
    } catch (error) {
        next(error)
    }
}

router.get('/', home);

module.exports = router;