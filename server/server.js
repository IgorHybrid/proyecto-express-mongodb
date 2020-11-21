/**
 * Server start point
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

const db = require('./db.js');

app.use('/', express.static(__dirname));

app.use(bodyParser.json());

//Enable all CORS requests
app.use(cors());

app.use('/', require('./routes/home'));
app.use('/types', require('./routes/type'));

const port = process.env.PORT || 8080;
app.listen(port, async () => {
    await db.startDB();
    console.log('Server listening on port ' + port);
});
