/**
 * Server start point
 */

const express = require('express');
const app = express();

const db = require('./db.js');

app.use('/', express.static(__dirname));

app.use('/', require('./routes/home'));
app.use('/types', require('./routes/type'));

const port = process.env.PORT || 8080;
app.listen(port, async () => {
    await db.startDB();
    console.log('Server listening on port ' + port);
});
