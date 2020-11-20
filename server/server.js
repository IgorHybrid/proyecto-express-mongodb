/**
 * Server start point
 */

const express = require('express');
const app = express();

const db = require('./db.js');

app.use('/', express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: './client'});
});

const port = process.env.PORT || 8080;
app.listen(port, async () => {
    await db.startDB();
    console.log('Server listening on port ' + port);
});
