const express = require('express');
const app = express();

app.use('/', express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: './client'})
})

const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
