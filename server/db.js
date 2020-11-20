const mongoose = require('mongoose');

const config = require('./config/database');

const startDB = async ()  => {
    try {
        const db = await mongoose.connect(config.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.info(`Connected to database on Worker process: ${process.pid}`);
        return db;
    } catch (error) {
        console.error(`Connection error: ${error.stack} on Worker process: ${process.pid}`);
        process.exit(1);
    }
}

exports.startDB = startDB;