const error404 = (req, res, next) => {
    res.status(404).send({'msg': 'Page not found'});
}

module.exports = error404;