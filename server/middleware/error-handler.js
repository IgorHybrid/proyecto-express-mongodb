/**
 * Error handler for HTTP requests
 */

const errorHandler = (err, req, res, next) => {

    if (typeof (err) === 'string') {
        // custom application error
        return res.status(400).json({ message: err });
    }

    if (err.name === 'ValidationError') {
        // mongoose validation error
        return res.status(400).json({ message: err.message });
    }

    // default to 500 server error
    console.error(err);
    return res.status(500).json({ message: err.message });
}

module.exports = errorHandler;