/**
 * Routers for home
 */

const express = require('express');
const router = express.Router();

const home = async (req, res, next) => {
    try {
        res.render('index.ejs');
    } catch (error) {
        next(error)
    }
}

router.get('/', home);

module.exports = router;