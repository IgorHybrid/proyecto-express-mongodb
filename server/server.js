/**
 * Server start point
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

const db = require('./db.js');
const error404Handler = require('./middleware/error404');
const errorHandler = require('./middleware/error-handler');

app.use('/', express.static(__dirname));
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable all CORS requests
app.use(cors());

app.use('/', require('./routes/home'));
app.use('/types', require('./routes/type'));
app.use('/request', require('./routes/request'));

//Error middleware
app.use(error404Handler);
app.use(errorHandler);

const port = process.env.PORT || 8080;
app.listen(port, async () => {
    await db.startDB();
    console.log('Server listening on port ' + port);
});
